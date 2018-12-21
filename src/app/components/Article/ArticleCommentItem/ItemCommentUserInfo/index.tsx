import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";
import {Link} from "react-router-dom";
import DateUtil from "../../../../../lib/date/DateUtils";
import userStore from "app/stores/UserStore";
import commentStore from "app/stores/CommentStore";
import './practice.less';

interface Props {
    store: CommentModel
}

export class ArticleItemUser extends React.Component<Props> {

    handlerDeleteComment(id) {
        commentStore.deleteComment(id);
    };

    render() {
        console.log('comment item user render')
        const originDate = new Date(this.props.store.createdAt);
        const date = DateUtil.changeDate(originDate);
        return (
            <div className="module-comment-user-info">
                <Link to={`#@${this.props.store.author.username}`}>
                    <img className="user-img" src={this.props.store.author.image}/>
                </Link>
                &nbsp;
                <Link className="username"  to={`#@${this.props.store.author.username}`}>
                    {this.props.store.author.username}
                </Link>
                <span className="date">{date}</span>
                <span className="delete">
                    {userStore.userModel ? <i className={"ion-trash-a"} onClick={() => this.handlerDeleteComment(this.props.store.id)}/> : null}
                </span>
            </div>
        )
    }
}