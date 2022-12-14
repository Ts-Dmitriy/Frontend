
export const commonData = {
    appName: 'application',
    siteUrl() {
        return 'http://localhost:8080/'
    },
    baseApiEndpoint() {
        if (process.env.VUE_APP_MODE === 'production') {
            return 'https://backend.uib.kz/'
        }
        return 'http://localhost:8888/backend/basic/web/'
    },
    uploadsPath() {
        if (process.env.VUE_APP_MODE === 'production') {
            return 'https://backend.uib.kz/uploads/'
        }
        return 'http://localhost:8888/backend/basic/web/uploads/'
    },
}