import {createStore} from 'vuex'
import usersdata from './modules/users/userdata'

const store = createStore({
    modules: {
        usersdata
    },
})
export default store