import {action, observable} from "mobx";
import {FeedModel} from "app/model/FeedModel/";
import APIConn from "../../lib/http/service_util";
import ChangeDate from "../../lib/date/ChangeDate";
import {TagModel} from "app/model/TagModel";
import userStore from "app/stores/UserStore";
import {FEEDS} from "app/constants/Feed";
import {AuthModel} from "app/model/AuthorModel";

class FeedStore {
    @observable feedList: FeedModel[];
    @observable feedCount: number;

    @observable feedCurrentPage: number = 0;
    @observable feedTag?: string;
    @observable feedAuthor: string;
    @observable feedCurrentToggle: string;

    @observable currentFeed: FEEDS;

    constructor(feedList: FeedModel[] = []) {
        this.feedList = feedList;
        this.feedCount = 0
    }

    @action fetchArticleData(offset?: number, name?: string, tag?: string) {

        APIConn.getInstance().getArticles(offset, name, tag, userStore.userModel ? true : null).then(res => {
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