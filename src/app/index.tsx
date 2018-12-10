import './style.less'
import * as React from 'react';
import {Component} from 'react';
import {MainPage} from "app/containers/Main";
import {TopNavigation} from "app/components";
import {createBrowserHistory} from 'history';
import {Route, Router, Switch} from 'react-router'
import {LoginPage} from './containers/Login';
import {RegisterPage} from "app/containers";
import DevTools from "mobx-react-devtools";

// render react DOM

export class App extends Component {

    render(): React.ReactNode {

        const history = createBrowserHistory();

        return (
            <Router history={history}>
                <div data-reactroot>
                    <TopNavigation/>

                    <Switch>
                        {/* <MainPage/> */}
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <Route exact path="/" component={MainPage}/>
                    </Switch>
                    <DevTools/>
                </div>
            </Router>
        )
    }
}
