<template>
    <layout-default>
        <form class="updateForm" v-if="user" @submit.prevent="updateUser">
            <md-field>
                <label>Имя</label>
                <md-input v-model="user.name"></md-input>
            </md-field>
            <md-field>
                <label>Фамилия</label>
                <md-input v-model="user.surname"></md-input>
            </md-field>
            <md-field>
                <label>Мейл</label>
                <md-input v-model="user.email"></md-input>
            </md-field>
            <md-field>
                <label>Пароль</label>
                <md-input v-model="user.password" type="password"></md-input>
            </md-field>
            <md-field>
                <label for="roles">Роль</label>
                <md-select v-model="user.role" name="roles" id="roles">
                    <md-option value="user">Пользователь</md-option>
                    <md-option value="admin">Админ</md-option>
                </md-select>
            </md-field>
            <md-checkbox v-model="user.subscribe">Подписка</md-checkbox>
            <div>
                <md-button>Назад</md-button>
                <md-button class="md-primary" type="submit">Сохранить</md-button>
            </div>
        </form>
    </layout-default>
</template>

<script>
    import LayoutDefault from "../../../layouts/LayoutDefault";
    import {mapActions, mapState} from "vuex";

    export default {
        components: {LayoutDefault},
        created() {
            this.getUser(this.$route.params.id)
        },
        data: () => ({
                name: 'name',
                surname: '',
                email: '',
                password: '',
                subscribe: '',
                role: ""
        }),
        name: "UserUpdate",
        methods: {
            ...mapActions('user', ['getUser']),
            updateUser(){
              console.log(this.user)
            }
        },
        computed:{
            ...mapState('user', ['user']),
        }
    }
</script>

<style lang="scss" scoped>
    .updateForm {
        max-width: 500px;
        margin: auto;
        margin-top: 50px;
    }
</style>