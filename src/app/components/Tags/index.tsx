import * as React from 'react'
import {TagStore} from "app/stores/TagStore";
import APIConn from "../../../lib/http/service_util";
import {observer} from "mobx-react";
import './style.less'
import {FeedStore} from "app/stores/FeedStore";
import {TagModel} from "app/components/Tags/TagModel/model";

interface Props {
    tagStore: TagStore
    feedStore: FeedStore
}

@observer
export class Tags extends React.Component<Props> {


    componentDidMount(): void {
        const store = this.props.tagStore;

        APIConn.getInstance().getTags().then(res => {
            store.tagModels = res.data.tags.map(tag => {
                return new TagModel(tag)
            })
        })
    }

    tagHandleEvent(tag: string) {
        event.preventDefault();
        const store = this.props.feedStore;
        store.feedTag = tag;
        store.feedCurrentToggle = tag;
        store.feedCurrentPage = 0;
        store.fetchArticleData(null, null, tag);
    }

    makeTagList() {
        const store = this.props.tagStore;
        return <div className={"tag-list"}>
            {store.tagModels.map(tag => (
                <a href={""} onClick={() => this.tagHandleEvent(tag.tag)} key={tag.id}
                   className={"tag-default tag-pill"}>
                    {tag.tag}
                </a>
            ))}
        </div>
    }

    render() {
        return (

            <div className={"sidebar"}>
                <p>Popular Tags</p>
                {this.makeTagList()}
            </div>
        );
    }
}