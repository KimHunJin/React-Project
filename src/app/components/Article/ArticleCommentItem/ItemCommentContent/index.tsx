import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";
import './practice.less';

interface Props {
    store: CommentModel;
}

export class ArticleItemContent extends React.Component<Props> {

    render(): React.ReactNode {
        console.log('comment item content render')

        return (
            <div className="module-comment-card">
                <p className="comment-contents">{this.props.store.body}</p>
            </div>
        )
    }
}