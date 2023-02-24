import {apiService} from "./apiService";
import {urls} from "../configs";

const authService = {
    login: async function (cred) {
        const response = await apiService.post(urls.auth.login, cred);

        if (response.status === 200) {
            this.setTokens(response.data)
        }
        return response
    }
}

export {authService}
