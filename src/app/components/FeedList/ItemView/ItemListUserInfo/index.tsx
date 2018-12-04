import * as React from 'react'
import './style.less'
import {DomProps} from "../../../../../lib/props/dom-props";

export interface ItemUserInfoProps extends DomProps{
    userName: string
    writeDate: string
    userImageUrl: string
}

export class ItemListUserInfo extends React.Component<ItemUserInfoProps> {
    render(): React.ReactNode {
        return (
            <div className={"article-meta"}>
                <a href={"#@"+this.props.userName}>
                    <img src={this.props.userImageUrl}/>
                </a>
                <div className={"info"}>
                    <a className={"author"} href={"#@" + this.props.userName}>{this.props.userName}</a>
                </div>
            </div>
        )
    }
}