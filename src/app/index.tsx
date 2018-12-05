import './style.less'
import * as React from 'react';
import {MainPage} from "app/containers/Main"
import {Provider} from "mobx-react";
import FeedStore from "app/stores/FeedStore";

// render react DOM
const feedStore = new FeedStore()

export const App = () => (

    <Provider store ={feedStore}>
        <div className={"App"}>
            <MainPage/>
        </div>
    </Provider>
)
