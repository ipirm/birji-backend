<template>
    <div>
        <div class="table-title">Общее количество пользователей: {{ total }}</div>
        <md-table>
            <md-table-row>
                <md-table-head>Имя</md-table-head>
                <md-table-head>Почта</md-table-head>
                <md-table-head>Роль</md-table-head>
                <md-table-head>Подписка</md-table-head>
                <md-table-head>Изменить</md-table-head>
                <md-table-head>Удалить</md-table-head>
            </md-table-row>

            <md-table-row v-for="item in users" :key="item._id">
                <md-table-cell>{{ item.name }}</md-table-cell>
                <md-table-cell>{{ item.email}}</md-table-cell>
                <md-table-cell>{{ item.role }}</md-table-cell>
                <md-table-cell>{{item.subscribe}}</md-table-cell>
                <md-table-cell>
                    <md-button class="md-icon-button">
                        <md-icon>edit</md-icon>
                    </md-button>
                </md-table-cell>
                <md-table-cell>
                    <md-button class="md-icon-button" @click.stop="delUser(item._id)">
                        <md-icon>delete</md-icon>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <div class="pager">
            <span @click="previousPage" :class="{'inactive' : currentPage == 1}">previous</span>
            page {{currentPage}} of {{pages}} <span @click="nextPage" :class="{'inactive' : currentPage == pages}">next</span>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: "TableItem",
        created() {
            this.getUsers(this.currentPage)
        },
        data() {
            return {
                currentPage: 1,
            }
        },
        methods: {
            ...mapActions('user', ['deleteUser','getUsers']),
            delUser(id) {
                this.deleteUser(id)
            },
            previousPage() {
                if(this.currentPage !==1) {
                    this.currentPage = this.currentPage-1
                    this.getUsers(this.currentPage)
                }
            },
            nextPage() {
                if(this.currentPage !== parseInt(this.pages)) {
                    this.currentPage = this.currentPage+1
                    this.getUsers(this.currentPage)
                }
            }

        },
        computed:{
            ...mapState('user', ['users', 'pages','total']),
        }
    }
</script>

<style lang="scss" scoped>
    .table-title{
        font-size: 20px;
        margin: 50px 0;
    }
    .pager {
        width: fit-content;
        margin: auto;
        margin-top: 50px;
    }

    .pager span {
        font-weight:bold;
        text-decoration:underline;
        cursor:pointer;
        padding:0px 15px 0px 15px
    }
    .inactive{
        opacity:0.2;
        text-decoration:none;
    }
</style>