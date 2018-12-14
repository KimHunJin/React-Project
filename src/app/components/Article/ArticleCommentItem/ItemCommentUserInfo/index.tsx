import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";
import {Link} from "react-router-dom";
import './style.less';
import DateUtil from "../../../../../lib/date/ChangeDate";

interface Props {
    store: CommentModel
}

export class ArticleItemUser extends React.Component<Props> {

    handlerDeleteComment = () => {

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
                <i onClick={this.handlerDeleteComment}></i>
            </div>
        )
    }
}