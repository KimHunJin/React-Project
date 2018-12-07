import * as React from 'react'
import './style.less'
import {FeedModel} from "app/components/Feed/FeedModel/model";
import {observer} from "mobx-react";

export interface FeedProps{
    feed: FeedModel
}

@observer
export class ItemListUserInfo extends React.Component<FeedProps> {
    constructor(props?: FeedProps) {
        super(props);
    }

    render(): React.ReactNode {
        const {feed} = this.props
        return (
            <div className={"article-meta"}>
                <a href={"#@" + feed.author.username}>
                    <img src={feed.author.image}/>
                </a>
                <div className={"info"}>
                    <a className={"author"} href={"#@" + feed.author.username}>{feed.author.username}</a>
                    <span className={"date"}>{feed.createAt}</span>
                </div>
                <div className={"pull-xs-right"}>
                    <button className={"btn btn-sm btn-outline-primary"}>
                        <i className={"ion-heart"}>
                            {feed.favoritesCount}
                        </i>
                    </button>
                </div>
            </div>
        )
    }
}