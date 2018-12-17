import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";
import {ArticleItemUser} from "app/components/Article/ArticleCommentItem/ItemCommentUserInfo";
import {ArticleItemContent} from "app/components/Article/ArticleCommentItem/ItemCommentContent";

interface Props {
    store: CommentModel
}

export class ArticleCommentItem extends React.Component<Props> {
    
    render() {
        console.log('article comment item render');
        return (
            <div className={"card"}>
                <ArticleItemContent store={this.props.store}/>
                <ArticleItemUser store={this.props.store} />
            </div>
        )
    }
}