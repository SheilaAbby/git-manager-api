<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/" v-on:click.native="logout()" replace>Logout</router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        name: 'App',
        computed: {
                ...mapState([
                    'authenticated',
                    'gitUser'
                ])
         
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "Login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
</style>