import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";

interface Props {
    store: CommentModel
}

export class ArticleItemUser extends React.Component<Props> {

    handlerDeleteComment = () => {

    };

    render() {
        return (
            <div>
                <img src={this.props.store.author.image}/>
                <p>{this.props.store.author.username}</p>
                <p>{this.props.store.createdAt}</p>
                <i onClick={this.handlerDeleteComment}></i>
            </div>
        )
    }
}