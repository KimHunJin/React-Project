import {HttpService} from "./axios";
import {
    ADD_COMMENT,
    ADD_FOLLOW,
    CREATE_ARTICLE,
    DELETE_ARTICLE,
    DELETE_COMMENT,
    DELETE_FOLLOW,
    FAVORITE_ARTICLE,
    GET_ARTICLES,
    GET_COMMENT,
    GET_CURRENT_USER,
    GET_PROFILE,
    GET_TAG,
    LOGIN_URI,
    REGIST_URI,
    UNFAVORITE_ARTICLE,
    UPDATE_ARTICLE,
    UPDATE_USER
} from "app/constants";
import feedStore from "app/stores/FeedStore";
import {FEEDS} from "app/constants/Feed";
import {AxiosPromise} from "axios";
import {FeedModel} from "app/model/FeedModel";
import {UserModel} from "app/model/UserModel";
import {CommentModel} from "app/model/CommentModel";

export default class APIConn extends HttpService {
    static instance: APIConn = null;

    static getInstance(): APIConn {
        if (APIConn.instance == null) {
            APIConn.instance = new APIConn();
        }
        return this.instance;
    }

    getArticle(slug: string): AxiosPromise<{ article: FeedModel }> {
        const url = `${GET_ARTICLES}/${slug}`;
        return this.client.get(url, null);
    }

    getCurrentUser(): AxiosPromise<{ user: UserModel }> {
        return this.client.get(GET_CURRENT_USER, null);
    }

    getArticles(offset: number = 0, name?: string, tag?: string): AxiosPromise {

        let url = GET_ARTICLES;
        console.log('get article');
        console.log(feedStore.currentFeed);
        switch (feedStore.currentFeed) {
            case FEEDS.GLOBAL : {
                url = `${url}?&offset=${offset}&limit=10`;
                break;
            }
            case FEEDS.YOUR_FEED : {
                url = `${url}/feed?&offset=${offset}&limit=10`;
                break;
            }
            case FEEDS.TAG: {
                url = `${url}?&offset=${offset}&tag=${tag}&limit=10`;
                break;
            }
            case FEEDS.FAVORITED: {
                url = `${url}?$offset=${offset}&favorited=${name}&limit=5`;
                break;
            }
            case FEEDS.MY_ARTICLE: {
                url = `${url}?$offset=${offset}&author=${name}&limit=5`;
                break;
            }
        }
        return this.client.get(url, null);
    }

    getTags(): AxiosPromise<{ tags: string[] }> {
        return this.client.get(GET_TAG);
    }

    getComment(slug: string): AxiosPromise<{ comments: CommentModel[] }> {

        const url = GET_COMMENT.replace(":slug", slug);

        return this.client.get(url, null);
    }

    getProfile(username: string): AxiosPromise {
        const url = GET_PROFILE.replace(":username", username);
        return this.client.get(url, null);
    }

    postLogin(user: any): AxiosPromise {
        return this.client.post(LOGIN_URI, {user});
    }

    postRegister(user: any): AxiosPromise {
        return this.client.post(REGIST_URI, {user});
    }

    postFavoriteArticle(feedSlug): AxiosPromise {
        const uri = FAVORITE_ARTICLE.replace(':slug', feedSlug);
        return this.client.post(uri, null, null);
    }

    postCreateArticle(data): AxiosPromise {
        return this.client.post(CREATE_ARTICLE, data, null);
    }

    postAddComment(slug, data): AxiosPromise {
        const uri = ADD_COMMENT.replace(':slug', slug);
        return this.client.post(uri, data, null);
    }

    postAddFollow(username): AxiosPromise {
        const uri = ADD_FOLLOW.replace(':username', username);
        console.log(uri);
        return this.client.post(uri, null, null);
    }

    putUpdateArticle(slug, data): AxiosPromise {
        const url = UPDATE_ARTICLE.replace(':slug', slug);
        return this.client.put(url, data, null);
    }

    putUpdateUser(data): AxiosPromise {
        return this.client.put(UPDATE_USER, data, null);
    }


    deleteUnFavoriteArticle(feedSlug): AxiosPromise {
        const uri = UNFAVORITE_ARTICLE.replace(':slug', feedSlug);
        return this.client.delete(uri, null);
    }

    deleteArticle(feedSlug): AxiosPromise {
        const uri = DELETE_ARTICLE.replace(':slug', feedSlug);
        return this.client.delete(uri, null);
    }

    deleteComment(feedSlug, commentId): AxiosPromise {
        let uri = DELETE_COMMENT.replace(':slug', feedSlug);
        uri = uri.replace(':id', commentId);
        return this.client.delete(uri, null);
    }

    deleteFollow(username) {
        const uri = DELETE_FOLLOW.replace(':username', username);
        return this.client.delete(uri, null);
    }
}