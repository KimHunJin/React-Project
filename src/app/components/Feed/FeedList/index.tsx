import * as React from "react";
import APIConn from "../../../../lib/http/service_util";


export class FeedList extends React.Component {

    getFeeds(): any {
        const api = APIConn.getInstance()
        return api.getArticle().then(res => {
            return res.data.articles
        }).then(articles => {
            articles.map(article => {
                this.setState(article)
            })
        })
    }

    componentDidMount(): void {

    }

    render(): React.ReactNode {
        return (
            <div>
                {/*{isObservableObject(this.props.store.feeds)? <div>{this.props.store.feeds.map(feed => console.log(feed))}</div> : <div>...</div>}*/}
            </div>
        )
    }
}