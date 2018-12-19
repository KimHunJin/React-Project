import * as React from 'react';
import {MyPageBanner} from "app/components/MyPage/MyPageBanner";
import profileStore from "app/stores/ProfileStore";
import {observer} from "mobx-react";
import {FeedList, FeedToggle} from "app/components";
import feedStore from "app/stores/FeedStore";
import userStore from "app/stores/UserStore";
import {FEEDS} from "app/constants/Feed";

@observer
export class MyPage extends React.Component {

    componentDidMount() {
        console.log('my page component did mount')
        const {match}: any = this.props;
        profileStore.username = match.params.username;
        feedStore.currentFeed = FEEDS.MY_ARTICLE;
        profileStore.getProfile(profileStore.username);

        feedStore.feedCount = 0;
        feedStore.param = match.params.username;
        feedStore.username = profileStore.username;
        feedStore.fetchArticleData();
    }

    render() {
        console.log('my page render')
        return (
            <div className={"profile-page"}>
                <MyPageBanner store={profileStore}/>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-xs-12 col-md-10 offset-md-1"}>
                            <FeedToggle store={feedStore} auth={userStore}/>
                            <FeedList feedStore={feedStore}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}