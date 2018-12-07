import * as React from 'react'
import {TagStore} from "app/stores/TagStore";
import APIConn from "../../../lib/http/service_util";
import {observer} from "mobx-react";
import './style.less'
import {FeedStore} from "app/stores/FeedStore";

interface Props {
    tagStore: TagStore
    feedStore: FeedStore
}

@observer
export class Tags extends React.Component<Props> {


    componentDidMount(): void {
        const store = this.props.tagStore

        APIConn.getInstance().getTags().then(res => {
            res.data.tags.map(tag => {
                store.setTag(tag)
            })
        })
    }

    tagHandleEvent(tag) {
        event.preventDefault()
        console.log(tag)
        const store = this.props.feedStore
        store.feedTag = tag
        store.feedCurrentToggle = tag
        store.feedCurrentPage = 0
        store.setFeeds(0)
    }

    render() {
        return (
            <div className={"sidebar"}>
                <p>Popular Tags</p>
                <div className={"tag-list"}>
                    {this.props.tagStore.getTag.map(tag => {
                        return (
                            <a href={""} onClick={() => this.tagHandleEvent(tag)} key={tag}
                               className={"tag-default tag-pill"}>{tag}</a>
                        )
                    })}
                </div>
            </div>
        );
    }
}