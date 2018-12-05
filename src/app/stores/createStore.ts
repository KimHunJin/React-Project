import {FeedStore} from "app/stores/FeedStore";
import {STORE_FEED, STORE_ROUTER} from "app/constants/stores";
import {RouterStore} from "app/stores/RouterStore";
import {FeedModel} from "app/components/Feed/FeedItem/ItemListFeedContent/model";

export function createStore(history, defaultFeeds?: FeedModel[]) {
    const feedStore = new FeedStore(defaultFeeds)
    const routerStore = new RouterStore(history)

    return {
        [STORE_FEED]: feedStore,
        [STORE_ROUTER]: routerStore
    }
}