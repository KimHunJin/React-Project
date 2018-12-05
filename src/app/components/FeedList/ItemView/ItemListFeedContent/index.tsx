import * as React from "react";
import {FeedModel} from "app/components/FeedList/ItemView/ItemListFeedContent/model";




export class ItemListFeedContent extends React.Component<FeedModel> {

    render(): React.ReactNode {

        return (
            <a className={"preview-link"}>
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <span>Read more...</span>
                <ul className={"tag-list"}>
                </ul>
            </a>
        )
    }
}