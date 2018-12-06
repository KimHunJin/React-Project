import * as React from "react";
import {FeedItem} from "app/components/Feed/FeedItem";
import {observer} from "mobx-react";
import APIConn from "../../../../lib/http/service_util";
import {FeedStore} from "app/stores/FeedStore";
import {FeedModel, UserModel} from "app/components/Feed/FeedModel/model";
import DateTimeFormat = Intl.DateTimeFormat;

interface Props {
    feedStore: FeedStore
}

@observer
export class FeedList extends React.Component<Props> {

    monthes: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov' , 'Dec']
    week: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Set']

    pad = (n) => {
        return n < 10 ? '0' + n : n
    }

    componentDidMount(): void {
        APIConn.getInstance().getArticle().then(res => {
            const data = res.data.articles
            data.map(article => {
                const title: string = article.title
                const body: string = article.body
                const tagList: string[] = article.tagList
                const createdAt: string = article.createdAt
                const feedDate = new Date(createdAt)
                const date = feedDate.getDate()
                const month =feedDate.getMonth()
                const year = feedDate.getFullYear()


                const day = feedDate.getDay()
                const label = this.week[day]

                const value = label + " " + this.monthes[month] + " " + this.pad(date) + " " + year
                const author: UserModel = article.author
                this.props.feedStore.setFeeds(new FeedModel(title, body, tagList, value, author))
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