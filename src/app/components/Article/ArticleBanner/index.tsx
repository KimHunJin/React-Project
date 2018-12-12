import * as React from 'react';
import {FeedModel} from "app/model/FeedModel";

interface Props {
    store: FeedModel
}

export class ArticleBanner extends React.Component<Props> {

    render() {
        return (
            <div>
                <h1>{this.props.store.title}</h1>
                <img src={""}/>
                <div>
                    <span><p>{this.props.store.author.username}</p></span>
                    <span><p>{this.props.store.createAt}</p></span>
                </div>
            </div>
        )
    }
}