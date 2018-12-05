import * as React from 'react'
import './style.less'
import {DomProps} from "../../../../../lib/props/dom-props";

export interface ItemUserInfoProps extends DomProps{
    userName: string
    writeDate: string
    userImageUrl: string
}

export class ItemListUserInfo extends React.Component<ItemUserInfoProps> {


    constructor(props) {
        super(props);
    }


    render(): React.ReactNode {
        return (
            <div className={"article-meta"}>
                <a href={"#@"+this.props.userName}>
                    <img src={this.props.userImageUrl}/>
                </a>
                <div className={"info"}>
                    <a className={"author"} href={"#@" + this.props.userName}>{this.props.userName}</a>
                    <span className={"date"}>{this.props.writeDate}</span>
                </div>
                <div className={"pull-xs-right"}>
                    <button className={"btn btn-sm btn-outline-primary"}>
                        <i className={"ion-heart"}>

                        </i>
                    </button>
                </div>
            </div>
        )
    }
}