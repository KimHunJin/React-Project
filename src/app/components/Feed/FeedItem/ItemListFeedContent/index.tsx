import * as React from "react";
import {FeedModel} from "app/components/Feed/FeedModel/model";
import './style.less'
import {observer} from "mobx-react";

interface FeedProps {
    model: FeedModel
}

@observer
export class ItemListFeedContent extends React.Component<FeedProps> {

    constructor(props?: FeedProps) {
        super(props)
    }

    render(): React.ReactNode {
        const feed = this.props.model;
        return (
            <a className={"preview-link"} href={"#article/"+feed.slug}>
                <h1>{feed.title}</h1>
                <p>{feed.description}</p>
                <span>Read more...</span>
                <ul className={"tag-list"}>
                    {feed.tagList.map(tag => {
                        return <li key={tag} className={"tag-default tag-pill tag-outline"}>{tag}</li>
                    })}
                </ul>
            </a>
        )
    }
}