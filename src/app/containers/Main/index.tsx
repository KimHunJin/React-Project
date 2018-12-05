import * as React from 'react';
import {TopNavigation} from "app/components/TopNavigation";
import {Banner} from "app/components/Banner"
import "./style.less"
import {FeedToogle} from "app/components/Feed/FeedToggle";
import {inject} from "mobx-react";
import {STORE_FEED} from "app/constants/stores";
import APIConn from "../../../lib/http/service_util";
import {FeedModel} from "app/components/Feed/FeedItem/ItemListFeedContent/model";
import {FeedStore} from "app/stores/FeedStore";
import {FeedList} from "app/components/Feed/FeedList";


@inject(STORE_FEED)
export class MainPage extends React.Component {

    getFeeds(): any {
        const api = APIConn.getInstance()
        return api.getArticle().then(res => {
            return res.data.articles
        }).then(articles => {
            const store = this.props[STORE_FEED] as FeedStore
            articles.map((article: FeedModel) =>
                store.feedList.push(new FeedModel(article.title, article.body, article.tagList, article.createAt, article.author))
            )
            return store
        })
    }

    render() {

        const feeds = this.getFeeds().then(res => {
            return res
        })
        
        return (
            <div>
                <TopNavigation/>
                <div className={"home-page"}>
                    <Banner/>
                    <div className={"container page"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <FeedToogle/>
                                <FeedList feeds={feeds}/>
                            </div>
                            <div className={"col-md-3"}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}