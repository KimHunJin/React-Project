import {action, observable} from "mobx";
import {FeedModel, AuthModel} from "app/model/FeedModel/index";
import APIConn from "../../lib/http/service_util";
import ChangeDate from "../../lib/date/ChangeDate";
import {TagModel} from "app/model/TagModel/index";
import userStore from "app/stores/UserStore";

class FeedStore {
    @observable feedList: FeedModel[];
    @observable feedCount: number;
    @observable feedCurrentPage: number = 0;
    @observable feedTag?: string;
    @observable feedAuthor: string;
    @observable feedCurrentToggle: string;

    constructor(feedList: FeedModel[] = []) {
        this.feedList = feedList;
        this.feedCount = 0
    }

    initializeStore() {
        this.feedCurrentToggle = '';
        this.feedTag = '';
        this.feedCurrentPage = 0;
    }

    @action fetchArticleData(offset?: number, feedAuthor?: string, tag?: string) {

        APIConn.getInstance().getArticle(offset, feedAuthor, tag, userStore.userModel ? true : null).then(res => {
            const data = res.data.articles;
            const feedModels = data.map(article => {
                const title: string = article.title;
                const body: string = article.body;
                const tagList = article.tagList.map(tag => {
                    return new TagModel(tag)
                });
                const createdAt: string = article.createdAt;
                const feedDate = new Date(createdAt);
                const changeDate = ChangeDate.changeDate(feedDate);
                const description: string = article.description;
                const slug: string = article.slug;

                const favorited: boolean = article.favorited;
                const favoritesCount: number = article.favoritesCount;

                const author: AuthModel = article.author;
                return new FeedModel(title, body, tagList, changeDate, author, favoritesCount, favorited, slug, description)
            });
            this.feedCount = res.data.articlesCount;
            this.feedList = feedModels;
        })
    }

}

const feedStore = new FeedStore();

export default feedStore
export {FeedStore}