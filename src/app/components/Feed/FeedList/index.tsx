import * as React from "react";
import {FeedItem} from "app/components/Feed/FeedItem";
import {observer} from "mobx-react";
import APIConn from "../../../../lib/http/service_util";
import {FeedStore} from "app/stores/FeedStore";
import {FeedModel, UserModel} from "app/components/Feed/FeedModel/model";
import ChangeDate from "../../../../lib/date/ChangeDate";
import {Footer} from "app/components/Feed/FeedFooter";

interface Props {
    feedStore: FeedStore
}

@observer
export class FeedList extends React.Component<Props> {

    componentDidMount(): void {
        APIConn.getInstance().getArticle().then(res => {
            const data = res.data.articles
            data.map(article => {
                const title: string = article.title
                const body: string = article.body
                const tagList: string[] = article.tagList
                const createdAt: string = article.createdAt
                const feedDate = new Date(createdAt)
                const changeDate = ChangeDate.changeDate(feedDate)
                const description: string = article.description
                const slug: string = article.slug

                let favorited: boolean = article.favorited
                let favoritesCount: number = article.favoritesCount

                const author: UserModel = article.author
                this.props.feedStore.setFeeds(new FeedModel(title, body, tagList, changeDate, author, favoritesCount, favorited, slug, description))
            })
            const count: number = res.data.articlesCount
            this.props.feedStore.feedCount = count
        })
    }

    render(): React.ReactNode {
        const store = this.props.feedStore
        return (
            <div>
                {store.feedList.map((article) => {
                    return <FeedItem key={article.id} feed={article}/>
                })
                }
                <Footer store={store}/>
            </div>
        )
    }
}