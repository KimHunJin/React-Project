import * as React from 'react'
import {FeedStore} from "app/stores/FeedStore";
import {observer} from "mobx-react";
import {FEEDS, GET_PAGE_COUNT, GET_PAGE_LIMIT} from "app/constants/Feed";

interface Props {
    store: FeedStore,
}

@observer
export class Footer extends React.Component<Props> {

    componentDidMount() {

    }

    createList(count): any {
        const list: any = [];
        const store = this.props.store;
        const currentFeedPage = store.feedCurrentPage;

        for (let page = 0; page < count; page++) {
            list.push(
                page == currentFeedPage ?
                    <li key={page}>
                        <a  href="#">{page + 1}</a>
                    </li> :
                    <li key={page} className={"page-item "}>
                        <a onClick={() => this.pageEventHandle(page)} href="#">{page + 1}</a>
                    </li>
            )
        }

        return list
    }

    pageEventHandle(pageNumber: number) {
        event.preventDefault();
        this.props.store.feedCurrentPage = pageNumber;
        const offset = (
            this.props.store.currentFeed == FEEDS.GLOBAL ||
            this.props.store.currentFeed == FEEDS.TAG ||
            this.props.store.currentFeed == FEEDS.YOUR_FEED) ?
            pageNumber * GET_PAGE_COUNT :
            pageNumber * 5;

        this.props.store.fetchArticleData(offset);
    }

    render() {
        console.log('feed footer render');
        const store = this.props.store;

        const feedCount = (
            this.props.store.currentFeed == FEEDS.GLOBAL ||
            this.props.store.currentFeed == FEEDS.TAG ||
            this.props.store.currentFeed == FEEDS.YOUR_FEED) ?
            store.feedCount / GET_PAGE_LIMIT :
            store.feedCount / 5;

        return (
            <nav>
                <ul>
                    {
                        this.createList(feedCount)
                    }
                </ul>
            </nav>
        );
    }
}