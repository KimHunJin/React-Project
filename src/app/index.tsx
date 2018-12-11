import './style.less'
import * as React from 'react';
import {Component} from 'react';
import {MainPage} from "app/containers/Main";
import {TopNavigation} from "app/components";
import {createBrowserHistory} from 'history';
import {Route, Router, Switch} from 'react-router'
import {LoginPage} from 'app/containers';
import {RegisterPage} from "app/containers";
import DevTools from "mobx-react-devtools";
import userStore from "app/stores/UserStore";

// render react DOM

export class App extends Component {

    render(): React.ReactNode {

        const history = createBrowserHistory();

        return (
            <Router history={history}>
                <div data-reactroot>
                    <TopNavigation auth={userStore}/>

                    <Switch>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <Route exact path="/" render={() => <MainPage auth={userStore}/>}/>
                    </Switch>
                    <DevTools/>
                </div>
            </Router>
        )
    }
}
