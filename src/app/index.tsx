import * as React from 'react';
import {Component} from 'react';
import {MainPage} from "app/pages/Main";
import {TopNavigation} from "app/components";
import {createBrowserHistory} from 'history';
import {Route, Router, Switch} from 'react-router'
import {ArticleDetailPage, LoginPage, RegisterPage} from 'app/pages';
import DevTools from "mobx-react-devtools";
import userStore from "app/stores/UserStore";
import {EditorPage} from "app/pages/Editor";
import {MyPage} from "app/pages/MyPage";
import {SettingPage} from "app/pages/Setting";
import './practice.less';

// render react DOM

export class App extends Component {

    render(): React.ReactNode {

        const history = createBrowserHistory();

        return (
            <Router history={history}>
                <div className={'root-container'}>
                    <TopNavigation auth={userStore}/>

                    <Switch>
                        <Route exact path="/settings" component={SettingPage}/>
                        <Route exact path="/editor" component={EditorPage}/>
                        <Route exact path="/editor/:slug" component={EditorPage}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <Route exact path="/article/:slug" component={ArticleDetailPage}/>
                        <Route exact path="/:username" component={MyPage}/>
                        <Route exact path="/" render={() => <MainPage auth={userStore}/>}/>
                    </Switch>
                    <DevTools/>
                </div>
            </Router>
        )
    }
}
