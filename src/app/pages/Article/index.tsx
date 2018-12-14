import * as React from 'react';
import {ArticleBanner} from "app/components/Article/ArticleBanner";
import {ArticleBody} from "app/components/Article/ArticleBody";
import {ArticleCommentList} from "app/components/Article/ArticleCommentList";
import {default as commentStore} from "app/stores/CommentStore";
import {observer} from "mobx-react";
import {ArticleEditor} from "app/components/Article/ArticleEditor";
import {FeedModel} from "app/model/FeedModel";
import APIConn from "../../../lib/http/service_util";
import userStore from "app/stores/UserStore";
import {observable} from "mobx";
import {CommentModel} from "app/model/CommentModel";
import './style.less';

@observer
export class ArticleDetailPage extends React.Component {

    @observable feed: FeedModel;

    componentDidMount() {

        const {match}: any = this.props;

        APIConn.getInstance().getArticle(match.params.slug, userStore.userModel ? true : null).then(
            res => {
                const data = res.data.article;
                this.feed = new FeedModel(
                    data.title,
                    data.body,
                    data.tagList,
                    data.createdAt,
                    data.author,
                    data.favoritesCount,
                    data.favorited,
                    data.slug,
                    data.description,
                    data.updatedAt);
            }
        );

        APIConn.getInstance().getComment(match.params.slug, userStore.userModel ? true : null).then(
            res => {
                const comments = res.data.comments;

                commentStore.commentList = comments.map(data => {
                    return new CommentModel(data.id, data.createdAt, data.updatedAt, data.body, data.author);
                });
            }
        );
    }

    render() {

        if (!this.feed) {
            return null;
        }

        return (
            <div className={"article-page"}>
                <ArticleBanner store={this.feed}/>
                <div className={"container page"}>
                    <ArticleBody store={this.feed}/>
                    <hr />
                    <div className={"article-actions"}/>
                    <div className={"row"}>
                        <div className={"col-xs-12 col-md-8 offset-md-2"}>
                            <ArticleEditor/>
                            <ArticleCommentList store={commentStore}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}