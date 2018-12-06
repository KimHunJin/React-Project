import * as React from "react";
import {FeedItem} from "app/components/Feed/FeedItem";
import {observer} from "mobx-react";
import APIConn from "../../../../lib/http/service_util";
import {FeedStore} from "app/stores/FeedStore";
import {FeedModel} from "app/components/Feed/FeedModel/model";

interface Props {
    feedStore: FeedStore
}

@observer
export class FeedList extends React.Component<Props> {

    componentDidMount(): void {
        APIConn.getInstance().getArticle().then(res => {
            const data = res.data.articles
            data.map(article => {
                this.props.feedStore.setFeeds(new FeedModel(article.title, article.body, article.tagList, article.createAt, article.author))
            })
        })
    }

    render(): React.ReactNode {
        const store = this.props.feedStore
        return (
            store.feedList.map((article) => {
                return <FeedItem key={article.id} feed={article}/>
            })
        )
    }
}