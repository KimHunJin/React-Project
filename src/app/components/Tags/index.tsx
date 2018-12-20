import * as React from 'react'
import {TagStore} from "app/stores/TagStore";
import APIConn from "../../../lib/http/service_util";
import {observer} from "mobx-react";
import {FeedStore} from "app/stores/FeedStore";
import {TagModel} from "app/model/TagModel/index";
import {FEEDS} from "app/constants/Feed";
import './practice.less';

interface Props {
    tagStore: TagStore
    feedStore: FeedStore
}

@observer
export class Tags extends React.Component<Props> {


    componentDidMount(): void {
        console.log('tags component did mount')
        const store = this.props.tagStore;

        APIConn.getInstance().getTags().then(res => {
            store.tagModels = res.data.tags.map(tag => new TagModel(tag));
        });
    }

    tagHandleEvent(tag: string) {
        event.preventDefault();
        const store = this.props.feedStore;
        store.feedTag = tag;
        store.feedCurrentToggle = tag;
        store.feedCurrentPage = 0;
        store.currentFeed = FEEDS.TAG;
        store.tag = tag;
        store.fetchArticleData();
    }

    makeTagList() {
        const store = this.props.tagStore;
        return (
            <div>
                {store.tagModels.map(tag => (
                    <a className={"tag"} href={""} onClick={() => this.tagHandleEvent(tag.tag)} key={tag.id}>
                        {tag.tag}
                    </a>
                ))}
            </div>
        )
    }

    render() {
        console.log('tag render')
        return (

            <div className={'module-tag'}>
                <p>Popular Tags</p>
                {this.makeTagList()}
            </div>
        );
    }
}