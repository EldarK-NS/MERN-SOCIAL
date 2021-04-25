// global header - забираем токен сразу из headers и вносим его в localStorage, это позволит использовать его при входе в приложение и использовать в последующем при необходимости сразу забирая из localStorage
import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}

export default setAuthToken;