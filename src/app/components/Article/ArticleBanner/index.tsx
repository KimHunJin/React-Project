import * as React from 'react';
import {FeedModel} from "app/model/FeedModel";
import userStore from "app/stores/UserStore";
import {Link} from "react-router-dom";
import './style.less';
import DateUtil from "../../../../lib/date/ChangeDate";
import {observer} from "mobx-react";
import APIConn from "../../../../lib/http/service_util";
import {OK} from "app/constants/Code";

interface Props {
    store: FeedModel
}

@observer
export class ArticleBanner extends React.Component<Props> {

    handlerDeleteArticle = () => {
        APIConn.getInstance().deleteArticle(true, this.props.store.slug).then(res => {
            if (res.status == OK) {
                history.back();
            }
        })
    };


    render() {
        console.log('article banner render');
        return (
            <div className={"banner"}>
                <div className={"container"}>
                    <h1>{this.props.store.title}</h1>
                    <div className={"article-meta"}>
                        <Link to={`#@${this.props.store.author.username}`}>
                            <img src={this.props.store.author.image}/>
                        </Link>
                        <div className={"info"}>
                            <Link className={"author"}
                                  to={`#@${this.props.store.author.username}`}>{this.props.store.author.username}</Link>
                            <span className={"date"}>{DateUtil.changeDate(new Date(this.props.store.createAt))}</span>
                        </div>
                        {userStore.userModel && userStore.userModel.username == this.props.store.author.username &&
                        <span>
                            <Link className={"btn btn-outline-secondary btn-sm"} to={`/editor/${this.props.store.slug}`}><i className={"ion-edit"}/>
                                Edit Article
                            </Link>
                            <button className={"btn btn-outline-danger btn-sm"} onClick={this.handlerDeleteArticle}><i className={"ion-trash-a"}/>
                                Delete Article
                            </button>
                        </span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}