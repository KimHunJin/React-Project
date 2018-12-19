import * as React from 'react';
import {Banner} from "app/components/Banner"
import "./style.less"
import {FeedToggle} from "app/components/Feed/FeedToggle";
import {FeedList} from "app/components/Feed/FeedList";
import feedStore from "app/stores/FeedStore";
import {observer} from "mobx-react";
import {Tags} from "app/components";
import tagStore from "app/stores/TagStore";
import {UserStore} from "app/stores/UserStore";
import {FEEDS} from "app/constants/Feed";

interface Props {
    auth: UserStore
}

@observer
export class MainPage extends React.Component<Props> {

    componentWillMount() {
        console.log('main page component did mount')
        feedStore.currentFeed = this.props.auth.userModel ? FEEDS.YOUR_FEED : FEEDS.GLOBAL;
        feedStore.param = null;
        feedStore.fetchArticleData();
    }

    render() {
        console.log('main page render')
        return (
            <div className={"home-page"}>
                {this.props.auth.userModel ? null : <Banner/>}
                <div className={"container page"}>
                    <div className={"row"}>
                        <div className={"col-md-9"}>
                            <FeedToggle store={feedStore} auth={this.props.auth}/>
                            <FeedList feedStore={feedStore}/>
                        </div>
                        <div className={"col-md-3"}>
                            <Tags tagStore={tagStore} feedStore={feedStore}/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}