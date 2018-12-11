import * as React from 'react'
import './style.less'
import {Link} from 'react-router-dom'
import {UserStore} from "app/stores/UserStore";
import {observer} from 'mobx-react';

interface Props {
    auth: UserStore
}

@observer
export class TopNavigation extends React.Component<Props> {


    caseLogin() {
        return (
            <div className={"container"}>
                <Link to={'/'} className={"navbar-brand"}>React</Link>
                <ul className={"nav navbar-nav pull-xs-right"}>
                    <li className={"nav-item"}><Link to={'/'} className={"nav-link"}>Home</Link></li>
                    <li className={"nav-item"}><Link to={'/editor'} className={"nav-link"}>New Post</Link></li>
                    <li className={"nav-item"}><Link to={'/setting'} className={"nav-link"}>Setting</Link></li>
                    <li className={"nav-item"}><Link to={`/@${this.props.auth.userModel.username}`} className={"nav-link"}>{this.props.auth.userModel.username}</Link></li>
                </ul>
            </div>
        )
    }

    caseDefault() {

        return (
            <div className={"container"}>
                <Link to={'/'} className={"navbar-brand"}>React</Link>
                <ul className={"nav navbar-nav pull-xs-right"}>
                    <li className={"nav-item"}><Link to={'/'} className={"nav-link"}>Home</Link></li>
                    <li className={"nav-item"}><Link to={'/login'} className={"nav-link"}>Sign in</Link></li>
                    <li className={"nav-item"}><Link to={'/register'} className={"nav-link"}>Sign up</Link></li>
                </ul>
            </div>
        )
    }


    render(): React.ReactNode {
        return (
            <nav className={"navbar navbar-light"}>
                {this.props.auth.userModel ? this.caseLogin() : this.caseDefault()}
            </nav>
        )
    }
}