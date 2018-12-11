import * as React from "react";
import './style.less'
import {FeedStore} from "app/stores/FeedStore";
import {observer} from "mobx-react";
import {UserStore} from "app/stores/UserStore";

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
        return (
            <li className={"nav-item"}>
                {store.feedCurrentToggle && store.feedAuthor && store.feedCurrentToggle === store.feedAuthor ?
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
                {store.feedCurrentToggle && store.feedTag && store.feedCurrentToggle === store.feedTag ?
                    <a href={""} className={"nav-link active"}><i className="ion-pound"/> {store.feedTag}</a> :
                    <a href={""} className={"nav-link"}><i className="ion-pound"/> {store.feedTag}</a>
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
        store.storeInitialize();
        store.feedCurrentToggle = auth;
        store.fetchArticleData(null,auth,null)
    }

    eventChangeTagGlobal(): void {
        event.preventDefault();
        const store = this.props.store;
        store.storeInitialize()
        store.fetchArticleData()
    }


    render() {
        return (
            <div className={"feed-toggle"}>
                <ul className={"nav nav-pills outline-active"}>
                    {this.props.store.feedAuthor && this.authorFeed()}
                    <li className={"nav-item"}>
                        {this.props.store.feedCurrentToggle  ?
                            <a href={""} onClick={() => this.eventChangeTagGlobal()} className={"nav-link"}>Global Feed</a> :
                            <a href={""} onClick={this.nonEvent} className={"nav-link active"}>Global Feed</a>
                        }
                    </li>
                    {this.props.store.feedTag && this.tagFeed()}
                </ul>
            </div>
        )
    }
}