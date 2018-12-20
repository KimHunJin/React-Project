import * as React from 'react'
import {ItemListUserInfo} from "app/components/Feed/FeedItem/ItemListUserInfo";
import {ItemListFeedContent} from "app/components/Feed/FeedItem/ItemListFeedContent";
import {FeedModel} from "app/model/FeedModel/index";
import {observer} from "mobx-react";
import './practice.less';


interface FeedProps {
    feed: FeedModel
}

@observer
export class FeedItem extends React.Component<FeedProps> {
    render(): React.ReactNode {
        console.log('feed item render');
        const {feed} = this.props;
        return (
            <div className={"module-item"}>
                <ItemListUserInfo feed={feed}/>
                <ItemListFeedContent model={feed}/>
            </div>
        )
    }
}
