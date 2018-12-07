import {HttpService} from "lib/http/axios";
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

        let url = GET_ARTICLES + `&offset=${offset}`
        author ? url += `&author=${author}` : url
        tag ? url += `&tag=${tag}` : url

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