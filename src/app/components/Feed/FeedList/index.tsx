import * as React from "react";
import {FeedItem} from "app/components/Feed/FeedItem";
import {observer} from "mobx-react";
import {FeedStore} from "app/stores/FeedStore";
import {Footer} from "app/components/Feed/FeedFooter";
import {CircularProgressBar} from "../../../../lib/progressbar/CircularProgressBar";

interface Props {
    feedStore: FeedStore
    percentage : number
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


        while (this.props.feedStore.feedList.length <= 0) {
            return <CircularProgressBar sqSize={200} strokeWidth={10} percentage={this.props.percentage}/> ;
        }

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