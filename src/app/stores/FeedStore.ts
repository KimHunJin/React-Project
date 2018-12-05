import {action, observable} from "mobx";
import {FeedModel} from "app/components/Feed/FeedItem/ItemListFeedContent/model";
import axios from 'axios'
import {API_URL, GET_ARTICLES} from "app/constants";

export default class FeedStore {
    @observable feedList: Array<FeedModel>

    @action getFeeds() {
        axios.get(API_URL+GET_ARTICLES).then(
            result => {
                console.log(result.data.articles)
                this.setFeeds(result.data.articles)
            }
        )
    }

    @action setFeeds(feeds: FeedModel[]) {
        this.feedList = feeds
    }
}