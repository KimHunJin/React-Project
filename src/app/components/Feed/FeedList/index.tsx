import {FeedModel} from "app/components/Feed/FeedItem/ItemListFeedContent/model";
import * as React from "react";

export interface FeedListProps {
    feeds: FeedModel[]
}

export class FeedList extends React.Component<FeedListProps>{

    constructor(props?: FeedListProps, context?: any) {
        super(props, context)
    }

    render(): React.ReactNode {
        const {feeds} = this.props
        return(
            <div>
                {feeds.map((feed) => {
                    console.log(feed)
                })}
            </div>
            )
    }
}