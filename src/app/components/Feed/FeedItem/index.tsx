import * as React from 'react'
import './style.less'
import {ItemListUserInfo} from "app/components/Feed/FeedItem/ItemListUserInfo";
import {ItemListFeedContent} from "app/components/Feed/FeedItem/ItemListFeedContent";
import {FeedModel} from "app/components/Feed/FeedModel/model";


export interface FeedProps {
    feed: FeedModel
}

export class FeedItem extends React.Component<FeedProps> {

    constructor(props?:FeedProps) {
        super(props);

    }

    render(): React.ReactNode {
        const {feed} = this.props
        return (
            <div className={"article-preview"}>
                <ItemListUserInfo feed={feed}/>
                <ItemListFeedContent feed={feed}/>
            </div>
        )
    }
}
