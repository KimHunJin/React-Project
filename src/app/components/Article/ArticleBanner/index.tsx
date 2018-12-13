import * as React from 'react';
import {FeedModel} from "app/model/FeedModel";
import userStore from "app/stores/UserStore";
import {Link} from "react-router-dom";

interface Props {
    store: FeedModel
}

export class ArticleBanner extends React.Component<Props> {

    render() {
        console.log(this.props.store);
        return (
            <div>
                <h1>{this.props.store.title}</h1>
                <img src={this.props.store.author.image}/>
                <div>
                    <span><p>{this.props.store.author.username}</p></span>
                    <span><p>{this.props.store.createAt}</p></span>

                    {userStore.userModel && userStore.userModel.username == this.props.store.author.username &&
                    <Link to={'/editor'}><i/>Edit Article</Link>}
                </div>
            </div>
        )
    }
}