import * as React from "react";
import './style.less'
import {FeedStore} from "app/stores/FeedStore";
import {observer} from "mobx-react";

interface Props {
    store: FeedStore
}

@observer
export class FeedToggle extends React.Component<Props> {

    authorFeed(): any {
        const store = this.props.store
        console.log('author')
        console.log(store)
        return (
            <li className={"nav-item"}>
                {store.feedCurrentToggle && store.feedAuthor && store.feedCurrentToggle === store.feedAuthor ?
                    <a href={""} className={"nav-link active"}>Your Feed</a> :
                    <a href={""} className={"nav-link"}>Your Feed</a>
                }
            </li>
        )
    }

    tagFeed(): any {
        const store = this.props.store
        return (
            <li className={"nav-item"}>
                {store.feedCurrentToggle && store.feedTag && store.feedCurrentToggle === store.feedTag ?
                    <a href={""} className={"nav-link active"}><i className="ion-pound"/> {store.feedTag}</a> :
                    <a href={""} className={"nav-link"}><i className="ion-pound"/> {store.feedTag}</a>
                }
            </li>
        )

    }

    tagGlobalEvent(): any {
        event.preventDefault()
        const store = this.props.store
        store.feedCurrentToggle = ''
        store.feedTag = ''
        store.setFeeds()
     }


    render() {
        return (
            <div className={"feed-toggle"}>
                <ul className={"nav nav-pills outline-active"}>
                    {this.props.store.feedAuthor && this.authorFeed()}
                    <li className={"nav-item"}>
                        {this.props.store.feedCurrentToggle ?
                            <a href={""} onClick={() => this.tagGlobalEvent()} className={"nav-link"}>Global Feed</a> :
                            <a href={""} className={"nav-link active"}>Global Feed</a>
                        }
                    </li>
                    {this.props.store.feedTag && this.tagFeed()}
                </ul>
            </div>
        )
    }
}