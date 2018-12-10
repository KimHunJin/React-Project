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
        this.props.feedStore.articleContentChange()
    }

    render(): React.ReactNode {

        if (this.props.feedStore.feedList.length === 0) return null;

        const store = this.props.feedStore;
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