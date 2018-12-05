import {FeedStore} from "app/stores/FeedStore";
import {STORE_FEED, STORE_ROUTER} from "app/constants/stores";
import {RouterStore} from "app/stores/RouterStore";

export function createStore(history) {
    const feedStore = new FeedStore()
    const routerStore = new RouterStore(history)

    return {
        [STORE_FEED]: feedStore,
        [STORE_ROUTER]: routerStore
    }
}