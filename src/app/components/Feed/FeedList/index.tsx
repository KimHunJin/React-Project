import * as React from "react";
import {FeedItem} from "app/components/Feed/FeedItem";
import {observer} from "mobx-react";
import {FeedStore} from "app/stores/FeedStore";
import {Footer} from "app/components/Feed/FeedFooter";

interface Props {
    feedStore: FeedStore
}

@observer
export class FeedList extends React.Component<Props> {

    constructor(props) {
        super(props)
    }

    render(): React.ReactNode {

        console.log('feed list render')

        const store = this.props.feedStore;

        if(store.feedList.length === 0) return (
            <div className={"article-preview"}>No articles are here... yet.</div>
        );

        return (
            <div>
                {store.feedList.map(article => (
                    <FeedItem key={article.id} feed={article}/>
                ))}
                <Footer store={store}/>
            </div>
        )
    }
}