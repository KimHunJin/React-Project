import * as React from 'react'
import {FeedStore} from "app/stores/FeedStore";
import {observer} from "mobx-react";
import './style.less'
import {GET_PAGE_COUNT, GET_PAGE_LIMIT} from "app/constants/Feed";

interface Props {
    store: FeedStore
}

@observer
export class Footer extends React.Component<Props> {

    createList(count): any {
        let list: any = [];
        const store = this.props.store;
        const currentFeedPage = store.feedCurrentPage;

        for (let page = 0; page < count; page++) {
            list.push(
                page == currentFeedPage ?
                    <li key={page} className={"page-item active"}>
                        <a className="page-link" href="#">{page + 1}</a>
                    </li> :
                    <li key={page} className={"page-item "}>
                        <a onClick={() => this.pageEventHandle(page)} className="page-link" href="#">{page + 1}</a>
                    </li>
            )
        }

        return list
    }

    pageEventHandle(pageNumber: number) {
        event.preventDefault();
        this.props.store.feedCurrentPage = pageNumber;
        const offset = pageNumber * GET_PAGE_COUNT;
        this.props.store.articleContentChange(offset);
    }

    render() {
        const store = this.props.store;
        const feedCount = store.feedCount / GET_PAGE_LIMIT;

        return (
            <nav>
                <ul className={"pagination"}>
                    {
                        this.createList(feedCount)
                    }
                </ul>
            </nav>
        );
    }
}