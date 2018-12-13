import * as React from "react";
import {FeedModel} from "app/model/FeedModel/index";
import './style.less'
import {observer} from "mobx-react";
import {Link} from "react-router-dom";

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
            <Link to={`/article/${feed.slug}`} className={"preview-link"}>
                <h1>{feed.title}</h1>
                <p>{feed.description}</p>
                <span>Read more...</span>
                <ul className={"tag-list"}>
                    {feed.tagList.map(tag => (
                        <li key={tag.id} className={"tag-default tag-pill tag-outline"}>{tag.tag}</li>
                    ))}
                </ul>
            </Link>
        )
    }
}