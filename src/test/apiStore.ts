import {action, computed, observable} from "mobx";
import {FeedModel} from "app/components/Feed/FeedModel/model";
import {getList} from "./api";

class ApiStore {
    @observable articles: FeedModel[];

    constructor(articles: FeedModel[] = []) {
        this.articles = articles;
    }

    @action setArticles = (articles) => {
        this.articles = articles;
    }

    @action setArticle = (article) => {
        this.articles.push(article)
    }

    @computed get getArticle(): FeedModel[] {
        return this.articles
    }

    getList() {
        getList().then(res => {
            res.data.articles.map(v => this.articles.push(new FeedModel(v.title, v.body, v.tagList, v.createAt, v.author)));
        });
    }
}

const apiStore = new ApiStore()

export default apiStore
export {ApiStore}