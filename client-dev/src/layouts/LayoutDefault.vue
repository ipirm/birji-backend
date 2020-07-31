<template>
    <div class="page-container md-layout-column">
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">Панель управления сайтом Биржи</span>

            <div class="md-toolbar-section-end">
                <md-button @click="logout()">Выйти</md-button>
            </div>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" md-swipeable>
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">Меню</span>
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <router-link class="sidebar-link" to="/users">
                    <md-icon>supervisor_account</md-icon>
                    <span class="md-list-item-text">Пользователи</span>
                    </router-link>
                </md-list-item>
            </md-list>
        </md-drawer>
        <md-content>
            <slot/>
        </md-content>
    </div>
</template>

<script>
    export default {
        name: "LayoutDefault",
        data() {
            return {
                showNavigation: false,
                showSidepanel: false
            }
        },
        methods:{
            logout(){
                this.$router.push({ path: '/login' })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-link{
        display: flex;
        align-items: center;
        width: 100%;
        color: inherit;
        span{
            margin-left: 25px;
        }
    }
    .page-container {
        min-height: 300px;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(#000, .12);
        height: 100vh;
    }

    // Demo purposes only
    .md-drawer {
        width: 230px;
        background-color: #fff;
        max-width: calc(100vw - 125px);
    }

    .md-content {
        padding: 16px;
    }
</style>