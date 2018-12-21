import * as React from 'react';
import {FeedModel} from "app/model/FeedModel";
import './practice.less';

interface Props {
    store: FeedModel
}

export class ArticleBody extends React.Component<Props> {

    render() {
        console.log('article body render');

        return (
            <div className="module-article-body">
                <div className="module-article-body-size">
                    <div className="body">
                        <p className="body-contents">{this.props.store.body}</p>
                    </div>
                    <ul className="tags">
                        {this.props.store.tagList.map(tag => (
                            <li className="tag" key={tag.id}>{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}