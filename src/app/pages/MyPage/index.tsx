import * as React from 'react';
import {MyPageBanner} from "app/components/MyPage/MyPageBanner";
import profileStore from "app/stores/ProfileStore";
import {observer} from "mobx-react";
import {FeedList, FeedToggle} from "app/components";
import feedStore from "app/stores/FeedStore";
import userStore from "app/stores/UserStore";
import {FEEDS} from "app/constants/Feed";
import './practice.less';


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
            <div>
                <MyPageBanner store={profileStore}/>
                <div className="module-my-page-content">
                    <div >
                        <div className="module-my-page-article">
                            <FeedToggle store={feedStore} auth={userStore}/>
                            <FeedList feedStore={feedStore}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}