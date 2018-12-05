import * as React from 'react';
import {TopNavigation} from "app/components/TopNavigation";
import {Banner} from "app/components/Banner"
import "./style.less"
import {FeedToogle} from "app/components/Feed/FeedToggle";
import {inject} from "mobx-react";
import {STORE_FEED} from "app/constants/stores";
import {FeedList} from "app/components/Feed/FeedList";


@inject(STORE_FEED)
export class MainPage extends React.Component {

    render() {
        return (
            <div>
                <TopNavigation/>
                <div className={"home-page"}>
                    <Banner/>
                    <div className={"container page"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <FeedToogle/>
                                <FeedList feeds={this.props[STORE_FEED].feedList}/>
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