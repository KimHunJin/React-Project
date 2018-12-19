import * as React from "react";
import './style.less'
import {FeedStore} from "app/stores/FeedStore";
import {observer} from "mobx-react";
import {UserStore} from "app/stores/UserStore";
import {FEEDS} from "app/constants/Feed";

interface Props {
    store: FeedStore
    auth: UserStore
}

@observer
export class FeedToggle extends React.Component<Props> {

    componentDidMount(): void {
        console.log('feed toggle component did mount');
        this.props.store.currentFeed = this.props.store.param? FEEDS.MY_ARTICLE : this.props.auth.userModel ? FEEDS.YOUR_FEED : FEEDS.GLOBAL;
        // this.props.store.fetchArticleData(); // 얘를 하지 않으면 실행이 초기 화면에서 피드 리스트가 나오지 않음.
    }

    authorFeed(): any {
        const store = this.props.store;
        const auth = this.props.auth;
        return (
            <li className={"nav-item"}>
                {auth.userModel && store.currentFeed == FEEDS.YOUR_FEED ?
                    <a href={""} onClick={this.nonEvent} className={"nav-link active"}>Your Feed</a> :
                    <a href={""} onClick={() => this.eventChangeTagAuth()} className={"nav-link"}>Your Feed</a>
                }
            </li>
        )
    }

    tagFeed(): any {
        const store = this.props.store;
        return (
            <li className={"nav-item"}>
                {store.currentFeed == FEEDS.TAG ?
                    <a href={""} className={"nav-link active"}><i className="ion-pound"/> {store.feedTag}</a> :
                    null
                }
            </li>
        )
    }

    globalFeed(): any {
        const store = this.props.store;
        return (
            <li className={"nav-item"}>
                {store.currentFeed == FEEDS.GLOBAL  ?
                    <a href={""} onClick={this.nonEvent} className={"nav-link active"}>Global Feed</a> :
                    <a href={""} onClick={() => this.eventChangeTagGlobal()} className={"nav-link"}>Global Feed</a>
                }
            </li>
        )
    }

    myArticlesFeed(): any {
        const store = this.props.store;
        return (
            <li className={"nav-item"}>
                {store.currentFeed == FEEDS.MY_ARTICLE  ?
                    <a href={""} onClick={this.nonEvent} className={"nav-link active"}>My Articles</a> :
                    <a href={""} onClick={() => this.eventChangeTagMyArticle()} className={"nav-link"}>My Articles</a>
                }
            </li>
        )
    }

    favoritedArticlesFeed(): any {
        const store = this.props.store;
        return (
            <li className={"nav-item"}>
                {store.currentFeed == FEEDS.FAVORITED  ?
                    <a href={""} onClick={this.nonEvent} className={"nav-link active"}>Favorited Articles</a> :
                    <a href={""} onClick={() => this.eventChangeTagFavoritedArticle()} className={"nav-link"}>Favorited
                        Articles</a>
                }
            </li>
        )
    }

    nonEvent(event): void {
        event.preventDefault();
    }

    eventChangeTagAuth():void {
        event.preventDefault();
        const store = this.props.store;
        const auth = store.feedAuthor;
        store.currentFeed = FEEDS.YOUR_FEED;
        store.feedCurrentToggle = auth;
        store.feedCurrentPage = 0;
        store.feedCount = 0;
        store.username = auth;
        store.fetchArticleData()
    }

    eventChangeTagGlobal(): void {
        event.preventDefault();
        const store = this.props.store;
        store.currentFeed = FEEDS.GLOBAL;
        store.feedCurrentPage = 0;
        store.feedCount = 0;
        store.fetchArticleData();
    }

    eventChangeTagMyArticle(): void {
        event.preventDefault();
        const store = this.props.store;
        store.currentFeed = FEEDS.MY_ARTICLE;
        store.feedCurrentPage = 0;
        store.feedCount = 0;
        store.username = this.props.store.param;
        store.fetchArticleData();
    }

    eventChangeTagFavoritedArticle(): void {
        event.preventDefault();
        const store = this.props.store;
        store.currentFeed = FEEDS.FAVORITED;
        store.feedCurrentPage = 0;
        store.feedCount = 0;
        store.username = this.props.store.param;
        store.fetchArticleData();
    }


    render() {
        console.log('feed toggle render');
        return (
            <div className={this.props.store.param ? "feed-toggle" : "article-toggle"}>
                <ul className={"nav nav-pills outline-active"}>
                    {!this.props.store.param && this.props.auth.userModel && this.authorFeed()}
                    {!this.props.store.param && this.globalFeed()}
                    {!this.props.store.param && this.tagFeed()}
                    {this.props.store.param && this.myArticlesFeed()}
                    {this.props.store.param && this.favoritedArticlesFeed()}
                </ul>
            </div>
        )
    }
}