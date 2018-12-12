import {HttpService} from "./axios";
import {
    CREATE_ARTICLE, FAVORITE_ARTICLE, GET_ARTICLES, GET_TAG, LOGIN_URI, REGIST_URI,
    UNFAVORITE_ARTICLE
} from "app/constants";

export default class APIConn extends HttpService {
    static instance: APIConn = null

    static getInstance(): APIConn {
        if (APIConn.instance == null) {
            APIConn.instance = new APIConn()
        }
        return this.instance
    }

    getArticle(offset: number = 0, author?: string, tag?: string, header?: any): any {

        let url = GET_ARTICLES + `&offset=${offset}`;
        if (author) url += `&author=${author}`;
        if (tag) url += `&tag=${tag}`;

        return this.client.get(url, null, header).then(result => {
            return result
        })
    }

    getTags(): any {
        return this.client.get(GET_TAG).then(result => {
            return result
        })
    }

    postLogin(user: any) {
        return this.client.post(LOGIN_URI, {user}).then(res => {
            return res;
        })
    }

    postRegister(user: any) {
        console.log(user)
        return this.client.post(REGIST_URI, {user}).then(res => {
            return res;
        }).catch(rej => {
            console.log(rej)

            console.log(rej.errors)
            return rej;
        })
    }

    postFavoriteArticle(auth, feedSlug): any {
        const uri = FAVORITE_ARTICLE.replace(':slug', feedSlug);

        return this.client.post(uri, null, null, auth).then(res => {
            return res
        })
    }

    postCreateArticle(auth, data): any {
        return this.client.post(CREATE_ARTICLE, data, null, auth).then(res => {
            return res;
        })
    }

    deleteUnFavoriteArticle(auth, feedSlug): any {
        const uri = UNFAVORITE_ARTICLE.replace(':slug', feedSlug);
        return this.client.delete(uri, null,  auth).then((res => {
            return res
        }))
    }
}