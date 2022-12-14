import { createStore } from 'vuex'
import httpClient from "/src/services/http.service";
const usersdata = createStore({
    state () {
        return {
            users: [],
        }
    },
    actions: {
        async GET_USERS({commit}){
            const {status, data} = await httpClient.get('user/get-data');
            if (status === 200){
                commit('SET_USER', data)
            }
        }
    },
    mutations: {
        SET_USER (state, backendData) {
            state.users = backendData
        }
    },
})
export default usersdata