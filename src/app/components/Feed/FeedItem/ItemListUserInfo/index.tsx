import * as React from 'react'
import './style.less'
import {FeedModel} from "app/model/FeedModel/index";
import {observer} from "mobx-react";
import userStore from "app/stores/UserStore";
import APIConn from "../../../../../lib/http/service_util";
import feedStore from "app/stores/FeedStore";
import {OK} from "app/constants/Code";
import {Link} from "react-router-dom";

export interface FeedProps {
    feed: FeedModel
}

@observer
export class ItemListUserInfo extends React.Component<FeedProps> {

    handlerFeedLike(feed: FeedModel) {
        if (userStore.userModel) {
            if (!feed.favorited) {
                APIConn.getInstance().postFavoriteArticle(feed.slug).then(res => {
                    if (res.status == OK) {
                        feed.favorited = true;
                        feedStore.fetchArticleData()
                    }
                })
            } else {
                APIConn.getInstance().deleteUnFavoriteArticle(feed.slug).then(res => {
                    if (res.status == OK) {
                        feed.favorited = false;
                        feedStore.fetchArticleData()
                    }
                })
            }
        } else {
            return
        }
    }

    render(): React.ReactNode {
        console.log('feed item user render');
        const {feed} = this.props;
        return (
            <div className={"article-meta"}>
                <Link to={`/${feed.author.username}`}>
                    {feed.author.image ?
                        <img src={feed.author.image} alt={""}/> :
                        <img alt={""}/>
                    }
                </Link>
                <div className={"info"}>
                    <Link className={"author"} to={`/${feed.author.username}`}>{feed.author.username}</Link>
                    <span className={"date"}>{feed.createdAt}</span>
                </div>
                <div className={"pull-xs-right"}>
                    <button className={feed.favorited ? "btn btn-sm btn-primary" : "btn btn-sm btn-outline-primary"}
                            onClick={() => this.handlerFeedLike(feed)}>
                        <i className={"ion-heart"}>
                            {feed.favoritesCount}
                        </i>
                    </button>
                </div>
            </div>
        )
    }
}