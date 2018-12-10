import * as React from 'react'
import './style.less'
import {Link} from 'react-router-dom'


export class TopNavigation extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className={"navbar navbar-light"}>
                <div className={"container"}>
                    <a className={"navbar-brand"} href="#">React</a>
                    <ul className={"nav navbar-nav pull-xs-right"}>
                        <li className={"nav-item"}><Link  to={'/'} className={"nav-link"}>Home</Link></li>
                        <li className={"nav-item"}><Link  to={'/login'} className={"nav-link"}>Sign in</Link></li>
                        <li className={"nav-item"}><Link to={'/register'} className={"nav-link"} >Sign up</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}