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

    componentDidMount(): void {
        this.props.feedStore.setFeeds()
    }

    render(): React.ReactNode {
        const store = this.props.feedStore;
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