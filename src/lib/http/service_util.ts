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

    getCurrentUser(header?: any): any {
        return this.client.get(GET_CURRENT_USER, null, header).then(res => {
            return res;
        });
    }

    getArticles(offset: number = 0, name?: string, tag?: string, header?: any): any {

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
        return this.client.get(url, null, header).then(res => {
            return res;
        })
    }

    getTags(): any {
        return this.client.get(GET_TAG).then(res => {
            return res;
        })
    }

    getComment(slug: string, header?: any): any {

        const url = GET_COMMENT.replace(":slug", slug);

        return this.client.get(url, null, header).then(res => {
            return res;
        })
    }

    getProfile(username: string, header?: any): any {
        const url = GET_PROFILE.replace(":username", username);
        return this.client.get(url, null, header).then(res => {
            return res;
        });
    }

    postLogin(user: any) {
        return this.client.post(LOGIN_URI, {user}).then(res => {
            return res;
        }).catch(reason => {
            console.log('post login');
            console.log(reason.errors);
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

    postAddComment(auth, slug, data): any {
        const uri = ADD_COMMENT.replace(':slug', slug);
        return this.client.post(uri, data, null, auth).then(res => {
            return res;
        })
    }

    postAddFollow(auth, username): any {
        const uri = ADD_FOLLOW.replace(':username', username);
        console.log(uri);
        return this.client.post(uri, null, null, auth).then(res => {
            return res;
        })
    }

    putUpdateArticle(slug, data): any {
        const url = UPDATE_ARTICLE.replace(':slug', slug);
        return this.client.put(url, data, null, true);
    }

    putUpdateUser(data): any {
        return this.client.put(UPDATE_USER, data, null, true);
    }


    deleteUnFavoriteArticle(auth, feedSlug): any {
        const uri = UNFAVORITE_ARTICLE.replace(':slug', feedSlug);
        return this.client.delete(uri, null, auth).then((res => {
            return res
        }))
    }

    deleteArticle(auth, feedSlug): any {
        const uri = DELETE_ARTICLE.replace(':slug', feedSlug);
        return this.client.delete(uri, null, auth).then(res => {
            return res;
        })
    }

    deleteComment(auth, feedSlug, commentId) {
        let uri = DELETE_COMMENT.replace(':slug', feedSlug);
        uri = uri.replace(':id', commentId);
        return this.client.delete(uri, null, auth).then(res => {
            return res;
        })
    }

    deleteFollow(auth, username) {
        const uri = DELETE_FOLLOW.replace(':username', username);
        return this.client.delete(uri, null, auth).then(res => {
            return res;
        })
    }
}