import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        authenticated: false,
        repositories: [
            'repo 1',
            'repo 2',
            'repo 3'

        ],
        gitUser: {
            username: process.env.GITHUB_USER,
            password: process.env.GITHUB_PASS
        },
        branches: [],
        Commits: [],
       
    },
    mutations: {

    },
    actions: {

    }

})