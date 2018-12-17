import * as React from 'react';
import {ProfileStore} from "app/stores/ProfileStore";
import userStore from "app/stores/UserStore";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import './style.less';

interface Props {
    store: ProfileStore;
}

@observer
export class MyPageBanner extends React.Component<Props> {

    handlerFollowing() {
        this.props.store.following ?
            this.props.store.unFollow(this.props.store.username) :
            this.props.store.follow(this.props.store.username);
    }

    followButton() {
        if (this.props.store.username == userStore.userModel.username) {
            return (
                <Link className={"btn btn-sm btn-outline-secondary action-btn"} to={"/settings"}>
                    <i className={"ion-gear-a"}/>&nbsp;Edit Profile Settings
                </Link>
            )
        } else {
            return (
                <button className={"btn btn-sm action-btn btn-outline-secondary"}
                        onClick={this.handlerFollowing}>
                    <i className={"ion-plus-round"}/> &nbsp;
                    {this.props.store.following ? `Unfollow` : `Follow`} &nbsp; {this.props.store.username}
                </button>
            )
        }
    }

    render() {
        console.log('my page banner render')
        return (
                <div className={"user-info"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-xs-12 col-md-10 offset-md-1"}>
                                <img className={"user-img"} src={this.props.store.image}/>
                                <h4>{this.props.store.username}</h4>
                                <p>{this.props.store.bio}</p>
                                {userStore.userModel && this.followButton()}
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}