import * as React from 'react'
import './style.less'
import {FeedModel} from "app/components/FeedList/ItemView/ItemListFeedContent/model";

export class ItemListUserInfo extends React.Component<FeedModel> {

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={"article-meta"}>
                <a href={"#@" + this.props.author.username}>
                    <img src={this.props.author.image}/>
                </a>
                <div className={"info"}>
                    <a className={"author"} href={"#@" + this.props.author.username}>{this.props.author.username}</a>
                    <span className={"date"}>{this.props.createAt}</span>
                </div>
                <div className={"pull-xs-right"}>
                    <button className={"btn btn-sm btn-outline-primary"}>
                        <i className={"ion-heart"}>
                            {this.props.favoritesCount}
                        </i>
                    </button>
                </div>
            </div>
        )
    }
}