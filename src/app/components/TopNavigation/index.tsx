import * as React from 'react'
import {Link} from 'react-router-dom'
import {UserStore} from "app/stores/UserStore";
import {observer} from 'mobx-react';
import './practice.less';

interface Props {
    auth: UserStore
}

@observer
export class TopNavigation extends React.Component<Props> {


    caseLogin() {
        return (
            <div >
                <Link className={'logo'} to={'/'} >React</Link>
                <ul >
                    <li ><Link className="link" to={'/'} >Home</Link></li>
                    <li ><Link className="link" to={'/editor'} ><i className="ion-compose"/>&nbsp;New Post</Link></li>
                    <li ><Link className="link" to={'/settings'} ><i className="ion-gear-a"/>&nbsp;Settings</Link></li>
                    <li ><Link className="link" to={`/${this.props.auth.userModel.username}`}>{this.props.auth.userModel.username}</Link></li>
                </ul>
            </div>
        )
    }

    caseDefault() {

        return (
            <div >
                <Link className={'logo'} to={'/'}>React</Link>
                <ul >
                    <li ><Link className={'link'} to={'/'} >Home</Link></li>
                    <li ><Link className={'link'} to={'/login'} >Sign in</Link></li>
                    <li><Link className={'link'} to={'/register'}>Sign up</Link></li>
                </ul>
            </div>
        )
    }


    render(): React.ReactNode {
        console.log('top navigation render')
        return (
            <nav className={'module-top-navigation'}>
                {this.props.auth.userModel ? this.caseLogin() : this.caseDefault()}
            </nav>
        )
    }
}