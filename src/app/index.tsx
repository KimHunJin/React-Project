import './style.less'
import * as React from 'react';
import {Component} from 'react';
import {MainPage} from "app/containers/Main";
import {TopNavigation} from "app/components";

// render react DOM

export class App extends Component {

    render(): React.ReactNode {
        return (
            <div data-reactroot>
                <TopNavigation/>
                <MainPage/>
            </div>
        )
    }
}
