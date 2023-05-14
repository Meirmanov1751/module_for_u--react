import instance from "../store/api";
import axios from "axios";

// export default class AuthService {
//     static async login(email, password) {
//         return instance.post('/api/token/', {email: email, password: password})
//     }
//
//     static async getUserInfo() {
//         return instance.get('/auth/users/me/')
//     }
//
//     static async registration(email, password) {
//         return instance.post('/auth/users/', {email: email, password: password})
//     }
//
//     static async logout() {
//         return instance.post('/auth/token/logout/')
//     }
// }

const API_URL = "http://localhost:8000/";

class AuthService {
    login(email, password) {
        debugger
        return instance
            .post("api/token/", {email: email, password: password})
            .then((response) => {
                localStorage.setItem('accessToken', response.data.access);
                console.log(localStorage.getItem('accessToken'));
                localStorage.setItem('refreshToken', response.data.refresh);
                return response.data;
            }).catch(e => alert(e));
    }

    getUserInfo() {
        return instance.get('auth/users/me/').catch(e => alert(e));
    }

    logout() {
        return instance.post('auth/token/logout/').then(
            ()=> {
                localStorage.removeItem("user");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
            }
        )


    }

    registration(email, password) {
        debugger
         return instance.post('/auth/users/', {email: email, password: password, role: 'user'})
     }
}

export default new AuthService();
