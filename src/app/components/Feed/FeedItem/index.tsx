import * as React from 'react'
import './style.less'
import {ItemListUserInfo} from "app/components/Feed/FeedItem/ItemListUserInfo";
import {ItemListFeedContent} from "app/components/Feed/FeedItem/ItemListFeedContent";
import {FeedModel} from "app/model/FeedModel/index";
import {observer} from "mobx-react";


interface FeedProps {
    feed: FeedModel
}

@observer
export class FeedItem extends React.Component<FeedProps> {

    render(): React.ReactNode {
        const {feed} = this.props;
        return (
            <div className={"article-preview"}>
                <ItemListUserInfo feed={feed}/>
                <ItemListFeedContent model={feed}/>
            </div>
        )
    }
}
