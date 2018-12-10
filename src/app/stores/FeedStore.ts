import {action, observable} from "mobx";
import {FeedModel, UserModel} from "app/components/Feed/FeedModel/model";
import APIConn from "../../lib/http/service_util";
import ChangeDate from "../../lib/date/ChangeDate";
import {TagModel} from "app/components/Tags/TagModel/model";

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

    storeChangeDefault() {
        this.feedCurrentToggle = '';
        this.feedTag = '';
        this.feedCurrentPage = 0;
    }

    @action articleContentChange(offset?:number) {
        const author = this.feedAuthor;
        const tag = this.feedTag;
        APIConn.getInstance().getArticle(offset, author, tag).then(res => {
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

                const author: UserModel = article.author;
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