import * as React from "react";
import {FeedModel} from "app/model/FeedModel/index";
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
        console.log('feed item content render')
        const feed = this.props.model;
        return (
            <Link to={`/article/${feed.slug}`}>
                <h1>{feed.title}</h1>
                <p>{feed.description}</p>
                <span>Read more...</span>
                <ul>
                    {feed.tagList.map(tag => (
                        <li key={tag.id} >{tag.tag}</li>
                    ))}
                </ul>
            </Link>
        )
    }
}