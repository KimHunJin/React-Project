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
        this.props.store.fetchArticleData()
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

    globarFeed(): any {
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


    render() {
        return (
            <div className={"feed-toggle"}>
                <ul className={"nav nav-pills outline-active"}>
                    {this.props.auth.userModel && this.authorFeed()}
                    {this.globarFeed()}
                    {this.tagFeed()}
                </ul>
            </div>
        )
    }
}