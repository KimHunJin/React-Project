import * as React from "react";
import APIConn from "../../../../lib/http/service_util";
import {FeedModel} from "app/components/Feed/FeedItem/ItemListFeedContent/model";

export class FeedListProps {
    feeds: FeedModel[] = []
}


export class FeedList extends React.Component<FeedListProps> {

    getFeeds(): any {
        const api = APIConn.getInstance()
        return api.getArticle().then(res => {
            return res.data.articles
        }).then(articles => {
            console.log(articles)
            articles.map(article => {
                this.props.feeds.push(article)
            })
        })
    }

    componentDidMount(): void {
        this.getFeeds()
    }

    render(): React.ReactNode {
        const feeds = this.props.feeds
        console.log('feeds')
        console.log(feeds)
        return (
            <div>
                {feeds.map(feed => {
                    console.log(feed)
                })}
            </div>
        )
    }
}