import * as React from 'react'
import './style.less'
import {FeedModel} from "app/model/FeedModel/index";
import {observer} from "mobx-react";
import userStore from "app/stores/UserStore";
import APIConn from "../../../../../lib/http/service_util";
import feedStore from "app/stores/FeedStore";

export interface FeedProps {
    feed: FeedModel
}

@observer
export class ItemListUserInfo extends React.Component<FeedProps> {

    handlerFeedLike(feed: FeedModel) {
        if(userStore.userModel) {
            APIConn.getInstance().postFavoriteArticle(true, feed.slug).then(res => {
                console.log(res);
                if(res.status == 200) {
                    feed.favorited = true;
                    console.log('test')
                    feedStore.fetchArticleData()
                }
            })
        } else {
            return
        }
    }

    render(): React.ReactNode {
        const {feed} = this.props;
        console.log(feed.favorited)
        return (
            <div className={"article-meta"}>
                <a href={"#@" + feed.author.username}>
                    {feed.author.image ?
                        <img src={feed.author.image} alt={""}/> :
                        <img alt={""}/>
                    }
                </a>
                <div className={"info"}>
                    <a className={"author"} href={"#@" + feed.author.username}>{feed.author.username}</a>
                    <span className={"date"}>{feed.createAt}</span>
                </div>
                <div className={"pull-xs-right"}>
                    <button className={feed.favorited ?"btn btn-sm btn-primary" : "btn btn-sm btn-outline-primary"} onClick={()=>this.handlerFeedLike(feed)}>
                        <i className={"ion-heart"}>
                            {feed.favoritesCount}
                        </i>
                    </button>
                </div>
            </div>
        )
    }
}