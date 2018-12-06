import * as React from 'react';
import {TopNavigation} from "app/components/TopNavigation";
import {Banner} from "app/components/Banner"
import "./style.less"
import {FeedToogle} from "app/components/Feed/FeedToggle";
import {observer} from "mobx-react";
import {FeedList} from "app/components/Feed/FeedList";
import feedStore from "app/stores/FeedStore";
import {Tags} from "app/components";
import tagStore from "app/stores/TagStore";

@observer
export class MainPage extends React.Component {

    render() {
        return (
            <div data-reactroot>
                <TopNavigation/>
                <div className={"home-page"}>
                    <Banner/>
                    <div className={"container page"}>
                        <div className={"row"}>
                            <div className={"col-md-9"}>
                                <FeedToogle/>
                                <FeedList feedStore={feedStore}/>
                            </div>
                            <div className={"col-md-3"}>
                                <Tags store={tagStore}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}