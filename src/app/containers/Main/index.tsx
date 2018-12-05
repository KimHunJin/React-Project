import * as React from 'react';
import {TopNavigation} from "app/components/TopNavigation";
import {Banner} from "app/components/Banner"
import "./style.less"
import {FeedToogle} from "app/components/Feed/FeedToggle";
import {inject, observer} from "mobx-react";

@inject('store')
@observer
export class MainPage extends React.Component {

    componentDidMount(): void {
        console.log(this.props)
    }

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