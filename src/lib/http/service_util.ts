import {HttpService} from "./axios";
import {GET_ARTICLES, GET_TAG} from "app/constants";

export default class APIConn extends HttpService {
    static instance: APIConn = null

    static getInstance(): APIConn {
        if (APIConn.instance == null) {
            APIConn.instance = new APIConn()
        }
        return this.instance
    }

    getArticle(offset: number = 0, author?: string, tag?: string): any {

        let url = GET_ARTICLES + `&offset=${offset}`;
        if (author) url += `&author=${author}`;
        if (tag) url += `&tag=${tag}`;

        return this.client.get(url).then(result => {
            return result
        })
    }

    getTags(): any {
        return this.client.get(GET_TAG).then(result => {
            return result
        })
    }

    getCommnet(): any {

    }
}