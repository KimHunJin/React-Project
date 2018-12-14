import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";
import {Link} from "react-router-dom";
import './style.less';
import DateUtil from "../../../../../lib/date/ChangeDate";
import userStore from "app/stores/UserStore";
import commentStore from "app/stores/CommentStore";

interface Props {
    store: CommentModel
}

export class ArticleItemUser extends React.Component<Props> {

    handlerDeleteComment(id) {
        commentStore.deleteComment(id);
    };

    render() {
        const originDate = new Date(this.props.store.createdAt);
        const date = DateUtil.changeDate(originDate);
        return (
            <div className={"card-footer"}>
                <Link className={"comment-author"} to={`#@${this.props.store.author.username}`}>
                    <img className={"comment-author-img"} src={this.props.store.author.image}/>
                </Link>
                &nbsp;
                <Link className={"comment-author"} to={`#@${this.props.store.author.username}`}>
                    {this.props.store.author.username}
                </Link>
                <span className={"date-posted"}>{date}</span>
                <span className={"mod-options"}>
                    {userStore.userModel ? <i className={"ion-trash-a"} onClick={() => this.handlerDeleteComment(this.props.store.id)}/> : null}
                </span>
            </div>
        )
    }
}