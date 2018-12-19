import * as React from 'react'
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
            <div >
                <Link to={'/'} >React</Link>
                <ul >
                    <li ><Link to={'/'} >Home</Link></li>
                    <li ><Link to={'/editor'} ><i className="ion-compose"/>&nbsp;New Post</Link></li>
                    <li ><Link to={'/settings'} ><i className="ion-gear-a"/>&nbsp;Settings</Link></li>
                    <li ><Link to={`/${this.props.auth.userModel.username}`}>{this.props.auth.userModel.username}</Link></li>
                </ul>
            </div>
        )
    }

    caseDefault() {

        return (
            <div >
                <Link to={'/'}>React</Link>
                <ul >
                    <li ><Link to={'/'} >Home</Link></li>
                    <li ><Link to={'/login'} >Sign in</Link></li>
                    <li><Link to={'/register'}>Sign up</Link></li>
                </ul>
            </div>
        )
    }


    render(): React.ReactNode {
        console.log('top navigation render')
        return (
            <nav >
                {this.props.auth.userModel ? this.caseLogin() : this.caseDefault()}
            </nav>
        )
    }
}