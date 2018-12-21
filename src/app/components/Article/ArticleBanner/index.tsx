import * as React from 'react';
import {FeedModel} from "app/model/FeedModel";
import userStore from "app/stores/UserStore";
import {Link} from "react-router-dom";
import DateUtil from "../../../../lib/date/DateUtils";
import {observer} from "mobx-react";
import APIConn from "../../../../lib/http/service_util";
import {OK} from "app/constants/Code";
import './practice.less';

interface Props {
    store: FeedModel
}

@observer
export class ArticleBanner extends React.Component<Props> {

    handlerDeleteArticle = () => {
        APIConn.getInstance().deleteArticle(this.props.store.slug).then(res => {
            if (res.status == OK) {
                history.back();
            }
        })
    };


    render() {
        console.log('article banner render');
        return (
            <div className="module-article-banner">
                <div className="module-article-size">
                    <h1 className="module-article-title">{this.props.store.title}</h1>
                    <div className="article-user-info">
                        <Link className="link-user-profile" to={`#@${this.props.store.author.username}`}>
                            <img className="img-user-profile" src={this.props.store.author.image}/>
                        </Link>
                        <div className="user-info">
                            <Link className="user-name"
                                  to={`#@${this.props.store.author.username}`}>{this.props.store.author.username}</Link>
                            <span className="date">{DateUtil.changeDate(new Date(this.props.store.createdAt))}</span>
                        </div>
                        {userStore.userModel && userStore.userModel.username == this.props.store.author.username && (
                            <span>
                                <Link
                                      to={`/editor/${this.props.store.slug}`}><i className={"ion-edit"}/>
                                    Edit Article
                                </Link>
                                <button  onClick={this.handlerDeleteArticle}>
                                    <i className={"ion-trash-a"}/>
                                    Delete Article
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}