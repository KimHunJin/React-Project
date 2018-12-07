import * as React from 'react'
import {FeedStore} from "app/stores/FeedStore";
import {observer} from "mobx-react";
import './style.less'

interface Props {
    store: FeedStore
}

@observer
export class Footer extends React.Component<Props> {

    createList(count): any {
        let list: any = []
        const store = this.props.store
        const currentFeed = store.feedCurrentPage

        for (let i = 0; i < count; i++) {
            list.push(
                i == currentFeed ?
                    <li key={i} className={"page-item active"}>
                        <a className="page-link" href="#">{i + 1}</a>
                    </li> :
                    <li key={i} className={"page-item "}>
                        <a className="page-link" href="#">{i + 1}</a>
                    </li>
            )
        }

        return list
    }

    render() {
        const store = this.props.store
        const count = store.feedCount / 10

        return (
            <nav>
                <ul className={"pagination"}>
                    {
                        this.createList(count)
                    }
                </ul>
            </nav>
        );
    }
}