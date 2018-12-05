import * as React from "react";
import {FeedModel} from "app/components/Feed/FeedItem/ItemListFeedContent/model";
import {FeedProps} from "app/components/Feed/FeedItem/ItemListUserInfo";


export interface FeedProps {
    model: FeedModel
}

export class ItemListFeedContent extends React.Component<FeedProps> {

    constructor(props?: FeedProps) {
        super(props)
    }

    render(): React.ReactNode {
        const {feed} = this.props
        return (
            <a className={"preview-link"}>
                <h1>{feed.title}</h1>
                <p>{feed.body}</p>
                <span>Read more...</span>
                <ul className={"tag-list"}>
                </ul>
            </a>
        )
    }
}