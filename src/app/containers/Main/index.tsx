import * as React from 'react';
import {TopNavigation} from "app/components/TopNavigation";
import {Banner} from "app/components/Banner"
import "./style.less"

export class MainPage extends React.Component {

    render() {
        return (
            <div>
                <TopNavigation/>
                <div className={"home-page"}>
                    <Banner/>
                </div>
            </div>
        )
    }
}