import * as React from "react";
import './style.less'

export class FeedToogle extends React.Component{
    render() {
        return (
            <div className={"feed-toggle"}>
                <ul className={"nav nav-pills outline-active"}>
                    <li className={"nav-item"}>
                        <a className={"nav-link active"}>Global Feed</a>
                    </li>
                </ul>
            </div>
        )
    }
}