import axios, {AxiosInstance, AxiosPromise} from "axios";
import {API_URL} from "app/constants";
import userStore from "app/stores/UserStore";

export class HttpClient {
    private readonly axios: AxiosInstance

    constructor(basePath: string) {
        this.axios = axios.create({
            baseURL: basePath,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    makeResponse<T>(promise: AxiosPromise<T>): AxiosPromise<T> {
        return new Promise((res, rej) => {
            promise
                .then(value => {
                    res(value)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }

    get<T = any>(url: string, params?, header?: any): AxiosPromise<T> {
        url = API_URL + url;
        if (header) {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${userStore.userModel.token}`
                },
                data: null,
                url
            };
            return this.axios(options)
        } else {

            return this.makeResponse(this.axios.get<T>(url, {params}))
        }
    }

    post<T = any>(url: string, data?, params?, header?: any): AxiosPromise<T> {
        // const url = API_URL + uri

        url = API_URL + url

        if (header) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${userStore.userModel.token}`
                },
                data: data,
                url
            };
            return this.axios(options)
        } else {
            return this.makeResponse(this.axios.post<T>(url, data, {params}))
        }
    }

    delete<T = any>(url: string, params?, header?:any): AxiosPromise<T> {

        url = API_URL + url

        if (header) {
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${userStore.userModel.token}`
                },
                data: null,
                url
            };
            return this.axios(options)
        } else {
            return this.makeResponse(this.axios.delete(url, {params}))
        }
    }

    put<T = any>(url: string, data?, params?): AxiosPromise<T> {
        return this.makeResponse(this.axios.put<T>(url, data, {params}))
    }

    pacth<T=any>(url: string, data?, params?): AxiosPromise<T> {
        return this.makeResponse(this.axios.patch<T>(url, data, {params}))
    }

    all(...requests): Promise<any[]> {
        return axios.all(requests)
    }
}

export class HttpService {
    protected client: HttpClient

    constructor(basePath: string = API_URL) {
        this.client = new HttpClient(basePath)
    }
}

