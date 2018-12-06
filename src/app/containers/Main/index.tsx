import * as React from 'react';
import {TopNavigation} from "app/components/TopNavigation";
import {Banner} from "app/components/Banner"
import "./style.less"
import {FeedToogle} from "app/components/Feed/FeedToggle";
import {inject, observer} from "mobx-react";
import APIConn from 'lib/http/service_util';

@observer
@inject('store')
export default class MainPage extends React.Component {

    componentDidMount(): void {
        console.log(this.props)
        APIConn.getInstance().getArticle().then(res => {
            // @ts-ignore
            this.props.setFeeds(res)
        })
    }

    getList() {
        // @ts-ignore
        return this.props.store.feedList.map(feed => <div>{feed.title}</div>)
    }

    render() {
        // @ts-ignore
        return (
            <div>
                <TopNavigation/>
                <div className={"home-page"}>
                    <Banner/>
                    <div className={"container page"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <FeedToogle/>
                                {this.getList()}
                            </div>
                            <div className={"col-md-3"}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}