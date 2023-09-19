import httpClient from "./http.service"
import router from "@/router"

const authService = {
    currentUser: null,
    isValidAuthKey: true,
    isLoggedIn() {
        return !!localStorage.getItem('auth_key')
    },
    getToken() {
        return localStorage.getItem('auth_key')
    },
    routerPush(name) {
        return router.push({name})
    },

    

    async login(formData) {
        try {
            const {status, data} = await httpClient.post('site/login', formData)
            localStorage.id=parseInt(data.user.id_user)
            console.log(localStorage.id)

                localStorage.role=data.roles.admin.name
                localStorage.role=data.roles.user.name
                console.log(localStorage.role)
            if (status === 200) {

                return {success: true}
            }
        } catch (e) {
            return {
                success: false,
                errors: e?.response?.data?.errors || {}
            }
        }
        return {success: false, errors: {}}
    },
    async logout() {
        localStorage.clear()
        await router.push({name: 'login'})
    },
}
    export default authService