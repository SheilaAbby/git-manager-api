<template>
    <div id="login">
        <h1>Login</h1>
        <b-form>
            <b-form-group>
        <b-form-input type="text" name="username" v-model="user.username" placeholder="Username" />
        <b-form-input type="password" name="password" v-model="user.password" placeholder="Password" />
        <b-button type="button" v-on:click="login()">Login</b-button>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.user.username != "" && this.user.password != "") {
                    if(this.user.username == this.$parent.gitUser.username && this.user.password == this.$parent. gitUser.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "Home" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color:green;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>