import * as React from 'react';
import {ArticleBanner} from "app/components/Article/ArticleBanner";
import {ArticleBody} from "app/components/Article/ArticleBody";
import {ArticleCommentList} from "app/components/Article/ArticleCommentList";
import {default as commentStore} from "app/stores/CommentStore";
import {observer} from "mobx-react";
import {ArticleEditor} from "app/components/Article/ArticleCommentEditor";
import {FeedModel} from "app/model/FeedModel";
import APIConn from "../../../lib/http/service_util";
import {observable} from "mobx";
import './practice.less';

@observer
export class ArticleDetailPage extends React.Component {

    @observable feed: FeedModel;

    componentDidMount() {
        console.log('article detail page component did mount')
        const {match}: any = this.props;

        commentStore.slug = match.params.slug;

        APIConn.getInstance().getArticle(match.params.slug).then(
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

        commentStore.getComment(match.params.slug);
    }

    render() {
        console.log('article detail page render')

        if (!this.feed) {
            return null;
        }

        return (
            <div>
                <ArticleBanner store={this.feed}/>
                <div className="module-article-size">
                    <ArticleBody store={this.feed}/>
                    <hr/>
                    <div />
                    <div>
                        <div className="module-comment-size">
                            <ArticleEditor store={this.feed}/>
                            <ArticleCommentList store={commentStore}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}