import './style.less'
import * as React from 'react';
import {Component} from 'react';
import {MainPage} from "app/containers/Main";
import {TopNavigation} from "app/components";
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router'
import { LoginPage } from './containers/Login';

// render react DOM

export class App extends Component {

    render(): React.ReactNode {

        const history = createBrowserHistory();

        return (
            <div data-reactroot>
                <TopNavigation/>
                <Router history={history}>
                    <Switch>
                    {/* <MainPage/> */}
                        <Route path="/login" component={LoginPage}/> */}
                        <Route path="/" component={MainPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
