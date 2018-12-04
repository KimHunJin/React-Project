import {HttpService} from "app/utils/axios";
import {AxiosPromise} from "axios";
import {GET_ARTICLES} from "app/constants";

export class MemberRestService extends HttpService{
    constructor() {
        super()
    }

    getArticleList(): AxiosPromise {
        return this.client.get(GET_ARTICLES)
    }
}