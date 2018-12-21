import * as React from 'react';
import {ProfileStore} from "app/stores/ProfileStore";
import userStore from "app/stores/UserStore";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import './practice.less';

interface Props {
    store: ProfileStore;
}

@observer
export class MyPageBanner extends React.Component<Props> {

    constructor(props) {
        super(props);
    }

    handlerFollowing = () => {
        console.log(this.props.store.following);
        console.log(this.props.store.username);
        this.props.store.following ?
            this.props.store.unFollow(this.props.store.username) :
            this.props.store.follow(this.props.store.username);
    };

    followButton = () => {
        if (this.props.store.username == userStore.userModel.username) {
            return (
                <Link className="link"  to={"/settings"}>
                    <i className={"ion-gear-a"}/>&nbsp;Edit Profile Settings
                </Link>
            )
        } else {
            return (
                <button className="link"
                        onClick={this.handlerFollowing}>
                    <i className={"ion-plus-round"}/> &nbsp;
                    {this.props.store.following ? `Unfollow` : `Follow`} &nbsp; {this.props.store.username}
                </button>
            )
        }
    };

    render() {
        console.log('my page banner render');
        return (
                <div className="module-my-page-banner">
                    <div >
                        <div>
                            <div className="module-my-page-size">
                                <img className="user-img" src={this.props.store.image}/>
                                <h4 className="username">{this.props.store.username}</h4>
                                <p className="user-bio">{this.props.store.bio}</p>
                                {userStore.userModel && this.followButton()}
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}