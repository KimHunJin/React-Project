import * as React from 'react';
import {CommentStore} from "app/stores/CommentStore";
import {ArticleCommentItem} from "app/components/Article/ArticleCommentItem";
import {observer} from "mobx-react";

interface Props {
    store: CommentStore
}

@observer
export class ArticleCommentList extends React.Component<Props> {

    render() {

        if (!this.props.store.commentList) {
            return null;
        }

        return (
            <div>
                {this.props.store.commentList.map(comment => (
                    <ArticleCommentItem key={comment.id} store={comment}/>
                ))}
            </div>
        )
    }
}