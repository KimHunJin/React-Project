import {observable} from "mobx";
import {FeedModel} from "app/components/Feed/FeedItem/ItemListFeedContent/model";

export class FeedStore {
    @observable feedList: Array<FeedModel>

    constructor(models?: FeedModel[]) {
        if(models) {
            this.feedList = models
        } else {
            this.feedList = new Array<FeedModel>()
        }
    }

}