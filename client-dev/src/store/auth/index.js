import apiRequest from '../../utils/apiRequest'

export default {
    namespaced: true,

    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
        user: null
    },
    getters: {
        isAuthenticated: (state) => {
            if (state.token.length > 0) {
                return true
            }
            return false
        },
        authStatus: state => state.status,
    },
    mutations: {
        SET_LOADING: (state) => {
            state.status = 'loading'
        },
        AUTH_SUCCESS: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.status = 'error'
        },
        SET_USER: (state, payload) => {
            state.user = payload
        },
        AUTH_LOGOUT: (state) => {
            state.user = null
            state.token = ''
        }
    },

    actions: {
        async LogIn({commit, dispatch}, user) {
            commit('SET_LOADING')
            await apiRequest.post('auth/login', JSON.stringify(user)).then(resp => {
                const token = resp.data.access_token
                localStorage.setItem('user-token', token)
                commit('AUTH_SUCCESS', token)
                dispatch('getUser')
            })
        },
        async getUser({commit}) {
            const data = await apiRequest.get('auth/profile')
            commit('SET_USER', data.data);
        },
        async logOut({commit}) {
            commit('AUTH_LOGOUT')
            localStorage.removeItem('user-token')
        }
    }
}