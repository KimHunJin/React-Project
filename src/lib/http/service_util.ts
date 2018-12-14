import {HttpService} from "./axios";
import {
    CREATE_ARTICLE, DELETE_ARTICLE,
    FAVORITE_ARTICLE,
    GET_ARTICLES, GET_COMMENT,
    GET_TAG,
    LOGIN_URI,
    REGIST_URI,
    UNFAVORITE_ARTICLE, UPDATE_ARTICLE
} from "app/constants";
import feedStore from "app/stores/FeedStore";
import {FEEDS} from "app/constants/Feed";

export default class APIConn extends HttpService {
    static instance: APIConn = null;

    static getInstance(): APIConn {
        if (APIConn.instance == null) {
            APIConn.instance = new APIConn();
        }
        return this.instance;
    }

    getArticle(slug: string, header?: any): any {
        const url = `${GET_ARTICLES}/${slug}`;
        return this.client.get(url, null, header).then(res => {
            return res;
        });
    }

    getArticles(offset: number = 0, name?: string, tag?: string, header?: any): any {

        let url = GET_ARTICLES;
        switch (feedStore.currentFeed) {
            case FEEDS.GLOBAL : {
                url += `?&offset=${offset}`;
                url += "&limit=10";
                break;
            }
            case FEEDS.YOUR_FEED : {
                url += `/feed?&offset=${offset}`;
                url += "&limit=10";
                break;
            }
            case FEEDS.TAG: {
                url += `?&offset=${offset}&tag=${tag}`;
                url += "&limit=10";
                break;
            }
            case FEEDS.FAVORITED: {
                url += `?$offset=${offset}&favorited=${name}`;
                url += "&limit=10";
                break;
            }
            case FEEDS.MY_ARTICLE: {
                url += `?$offset=${offset}&author=${name}`;
                url += "&limit=10";
                break;
            }
        }
        return this.client.get(url, null, header).then(result => {
            return result
        })
    }

    getTags(): any {
        return this.client.get(GET_TAG).then(result => {
            return result
        })
    }

    getComment(slug:string, header?:any): any {

        const url = GET_COMMENT.replace(":slug",slug);

        return this.client.get(url,null, header).then(result => {
            return result;
        })
    }

    postLogin(user: any) {
        return this.client.post(LOGIN_URI, {user}).then(res => {
            return res;
        })
    }

    postRegister(user: any) {
        return this.client.post(REGIST_URI, {user}).then(res => {
            return res;
        }).catch(rej => {
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

    putUpdateArticle(slug, data) :any {
        const url = UPDATE_ARTICLE.replace(':slug', slug);
        return this.client.put(url, data, null, true);
    }


    deleteUnFavoriteArticle(auth, feedSlug): any {
        const uri = UNFAVORITE_ARTICLE.replace(':slug', feedSlug);
        return this.client.delete(uri, null, auth).then((res => {
            return res
        }))
    }

    deleteArticle(auth, feedSlug): any {
        const uri = DELETE_ARTICLE.replace(':slug',feedSlug);
        return this.client.delete(uri,null,auth).then(res => {
            return res;
        })
    }
}