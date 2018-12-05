import {observable} from "mobx";
import {FeedModel} from "app/components/FeedList/ItemView/ItemListFeedContent/model";

export class FeedStore {
    @observable feedList: Array<FeedModel>

    constructor(models: FeedModel[]) {
        this.feedList = models
    }

}