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

    constructor(props) {
        super(props)

    }

    render(): React.ReactNode {

        const store = this.props.feedStore;

        if(store.feedList.length === 0) return null;

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