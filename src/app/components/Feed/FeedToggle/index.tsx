import * as React from "react";
import './style.less'
import {FeedStore} from "app/stores/FeedStore";
import {observer} from "mobx-react";
import {UserStore} from "app/stores/UserStore";
import {FEEDS} from "app/constants/Feed";

interface Props {
    store: FeedStore
    auth: UserStore
    param: any;
}

@observer
export class FeedToggle extends React.Component<Props> {

    componentDidMount(): void {
        this.props.store.fetchArticleData();
    }
    authorFeed(): any {
        const store = this.props.store;
        const auth = this.props.auth;
        console.log('auth toggle');
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
        console.log('tag toggle');
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
        console.log('global toggle');
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
        console.log('my toggle');
        return (
            <li className={"nav-item"}>
                {store.currentFeed == FEEDS.GLOBAL  ?
                    <a href={""} onClick={this.nonEvent} className={"nav-link active"}>Global Feed</a> :
                    <a href={""} onClick={() => this.eventChangeTagMyArticle()} className={"nav-link"}>My Articles</a>
                }
            </li>
        )
    }

    favoritedArticlesFeed(): any {
        const store = this.props.store;
        console.log('favorite toggle');
        return (
            <li className={"nav-item"}>
                {store.currentFeed == FEEDS.GLOBAL  ?
                    <a href={""} onClick={this.nonEvent} className={"nav-link active"}>Global Feed</a> :
                    <a href={""} onClick={() => this.eventChangeTagFavoritedArticle()} className={"nav-link"}>Favorited Articles</a>
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
        store.fetchArticleData(null,auth,null)
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
        store.fetchArticleData(0,this.props.param,null);
    }

    eventChangeTagFavoritedArticle(): void {
        event.preventDefault();
        const store = this.props.store;
        store.currentFeed = FEEDS.FAVORITED;
        store.feedCurrentPage = 0;
        store.feedCount = 0;
        store.fetchArticleData(0, this.props.param, null);
    }


    render() {
        return (
            <div className={this.props.param ? "feed-toggle" : "article-toggle"}>
                <ul className={"nav nav-pills outline-active"}>
                    {!this.props.param && this.props.auth.userModel && this.authorFeed()}
                    {!this.props.param && this.globalFeed()}
                    {!this.props.param && this.tagFeed()}
                    {this.props.param && this.myArticlesFeed()}
                    {this.props.param && this.favoritedArticlesFeed()}
                </ul>
            </div>
        )
    }
}