import * as React from 'react';
import {FeedModel} from "app/model/FeedModel";

interface Props {
    store: FeedModel
}

export class ArticleBody extends React.Component<Props> {

    render() {
        return (
            <div>
                <p>{this.props.store.body}</p>
            </div>
        )
    }
}