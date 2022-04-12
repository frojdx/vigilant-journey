import axios from "axios";

export const url = ``;

const config = {
    baseURL: url,
    headers: {
        'Authorization': '',
        'Content-Type': 'application/json'
    },
}

export const api = axios.create(config);

api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status === 401) {
            window.location.href = "http://localhost:3000"
        }
        console.error(`Looks like there was a problem. Status Code: ` + res.status);
        return Promise.reject(error);
    }
)

export const request = (method, url, data, params) => {
    return api.request<T>({
        method,
        url,
        data,
        params
    });
};
