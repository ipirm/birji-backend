<template>
    <div class="login-page">
        <form class="login-page-form">
            <span class="login-page-title">Login Form</span>
            <md-field :class="messageClass">
                <label>Email</label>
                <md-input v-model="required" required></md-input>
                <span class="md-error">There is an error</span>
            </md-field>
            <md-field :class="messageClass">
                <label>Password</label>
                <md-input v-model="password" type="password" required></md-input>
                <span class="md-error">There is an error</span>
            </md-field>
            <md-button class="md-raised md-primary" @click="logIn">Login</md-button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        components: {},
        data: () => ({
            noError: null,
            required: null,
            textarea: null,
            hasMessages: false,
            password: ''
        }),
        methods: {
          logIn(){
                  this.$router.push({ path: '/users' })
          }
        },
        computed: {
            messageClass() {
                return {
                    'md-invalid': this.hasMessages
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-page {
        width: 100%;
        overflow: hidden;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        &-title {
            font-size: 20px;
            margin-bottom: 30px;
        }

        &-form {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            border: 1px solid #e0e0e0;
            width: 350px;
            height: 400px;
            padding: 27px;
        }
        .md-raised{
            margin-top: 30px;
        }
    }
</style>