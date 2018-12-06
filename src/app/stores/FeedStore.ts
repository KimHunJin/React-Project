import {action, computed, observable} from "mobx";
import {FeedModel} from "app/components/Feed/FeedModel/model";

class FeedStore {
    @observable feedList: FeedModel[]

    constructor(feedList: FeedModel[] = []) {
        this.feedList = feedList
    }

    @computed get getFeeds(): FeedModel[] {
        return this.feedList
    }

    @action setFeeds(feed: FeedModel) {
        this.feedList.push(feed)
    }
}

const feedStore = new FeedStore()

export default feedStore
export {FeedStore}