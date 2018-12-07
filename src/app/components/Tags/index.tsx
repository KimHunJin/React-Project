import * as React from 'react'
import {TagStore} from "app/stores/TagStore";
import APIConn from "../../../lib/http/service_util";
import {observer} from "mobx-react";
import './style.less'

interface Props {
    store: TagStore
}

@observer
export class Tags extends React.Component<Props>{

    componentDidMount(): void {
        const store = this.props.store

        APIConn.getInstance().getTags().then(res => {
            res.data.tags.map(tag => {
                store.setTag(tag)
            })
        })
    }

    render() {
        return (
            <div className={"sidebar"}>
                <p>Popular Tags</p>
                <div className={"tag-list"}>
                    {this.props.store.getTag.map(tag => {
                        return(<a href={""} key={tag} className={"tag-default tag-pill"}>{tag}</a>)
                    })}
                </div>
            </div>
        );
    }
}