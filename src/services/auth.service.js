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
            if (status === 200) {
                localStorage.setItem('auth_key', data.user.access_token)
                let role = Object.keys(data.roles)[0]
                localStorage.setItem('role', role)
                // this.setupUserData(data)

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