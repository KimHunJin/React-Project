import './style.less'
import * as React from 'react';
import {MainPage} from "app/containers/Main"
import {createBrowserHistory} from "history";
import {Provider} from "mobx-react";
import {createStore} from "app/stores/createStore";

// render react DOM

const history = createBrowserHistory()
const rootStore = createStore(history)

export const App = () => (
    <Provider {...rootStore}>
        <div className={"App"}>
            <MainPage/>
        </div>
    </Provider>
)
