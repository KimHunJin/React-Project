import {action, computed, observable} from "mobx";
import {FeedModel, UserModel} from "app/components/Feed/FeedModel/model";
import APIConn from "../../lib/http/service_util";
import ChangeDate from "../../lib/date/ChangeDate";

class FeedStore {
    @observable feedList: FeedModel[];
    @observable feedCount: number;
    @observable feedCurrentPage: number = 0;
    @observable feedTag?: string;
    @observable feedAuthor?: string;
    @observable feedCurrentToggle?: string;

    constructor(feedList: FeedModel[] = []) {
        this.feedList = feedList;
        this.feedCount = 0
    }

    @computed get getFeeds(): FeedModel[] {
        return this.feedList
    }

    @action setFeeds(offset?:number) {
        const author = this.feedAuthor;
        const tag = this.feedTag;
        const feedModels : FeedModel[] = [];
        APIConn.getInstance().getArticle(offset, author, tag).then(res => {
            const data = res.data.articles;
            data.map(article => {
                const title: string = article.title;
                const body: string = article.body;
                const tagList: string[] = article.tagList;
                const createdAt: string = article.createdAt;
                const feedDate = new Date(createdAt);
                const changeDate = ChangeDate.changeDate(feedDate);
                const description: string = article.description;
                const slug: string = article.slug;

                let favorited: boolean = article.favorited;
                let favoritesCount: number = article.favoritesCount;

                const author: UserModel = article.author;
                feedModels.push(new FeedModel(title, body, tagList, changeDate, author, favoritesCount, favorited, slug, description))
            });
            this.feedCount = res.data.articlesCount;
            this.feedList = feedModels;
        })
    }

}

const feedStore = new FeedStore();

export default feedStore
export {FeedStore}