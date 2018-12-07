import * as React from 'react';
import {Banner} from "app/components/Banner"
import "./style.less"
import {FeedToggle} from "app/components/Feed/FeedToggle";
import {FeedList} from "app/components/Feed/FeedList";
import feedStore from "app/stores/FeedStore";
import {Tags} from "app/components";
import tagStore from "app/stores/TagStore";
import {observer} from "mobx-react";

@observer
export class MainPage extends React.Component {

    render() {
        return (
            <div className={"home-page"}>
                <Banner/>
                <div className={"container page"}>
                    <div className={"row"}>
                        <div className={"col-md-9"}>
                            <FeedToggle store={feedStore}/>
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