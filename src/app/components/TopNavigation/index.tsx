import * as React from 'react'
import './style.less'



export class TopNavigation extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className={"navbar navbar-light"}>
                <div className={"container"}>
                    <a className={"navbar-brand"} href="#">React</a>
                    <ul className={"nav navbar-nav pull-xs-right"}>
                        <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Home</a></li>
                        <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Sign in</a></li>
                        <li className={"nav-item"}><a className={"nav-link"} href={"#"}>Sign up</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}