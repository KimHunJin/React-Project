import * as React from 'react'
import './style.less'
import {Link} from 'react-router-dom'
import {UserStore} from "app/stores/UserStore";

interface Props {
    auth: UserStore
}

export class TopNavigation extends React.Component<Props> {


    caseLogin() {
        return (
            <div className={"container"}>
                <a className={"navbar-brand"} href="#">React</a>
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
                <a className={"navbar-brand"} href="#">React</a>
                <ul className={"nav navbar-nav pull-xs-right"}>
                    <li className={"nav-item"}><Link to={'/'} className={"nav-link"}>Home</Link></li>
                    <li className={"nav-item"}><Link to={'/login'} className={"nav-link"}>Sign in</Link></li>
                    <li className={"nav-item"}><Link to={'/register'} className={"nav-link"}>Sign up</Link></li>
                </ul>
            </div>
        )
    }


    render(): React.ReactNode {
        console.log(this.props.auth.userModel)
        return (
            <nav className={"navbar navbar-light"}>
                {this.props.auth.userModel ? this.caseLogin() : this.caseDefault()}
            </nav>
        )
    }
}