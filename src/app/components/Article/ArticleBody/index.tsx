import * as React from 'react';
import {FeedModel} from "app/model/FeedModel";

interface Props {
    store: FeedModel
}

export class ArticleBody extends React.Component<Props> {

    render() {
        console.log(this.props.store.tagList.forEach(v => {
            console.log(v);
        }));
        return (
            <div className={"row article-content"}>
                <div className={"col-xs-12"}>
                    <div>
                        <p>{this.props.store.body}</p>
                    </div>
                    <ul className={"tag-list"}>
                        {this.props.store.tagList.map(tag => (
                            <li key={tag.id} className={"tag-default tag-pill tag-outline"}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}