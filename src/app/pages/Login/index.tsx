import * as React from 'react'
import {LoginForm} from "app/components/Form/LoginForm";
import loginStore from "app/stores/LoginStore";
import './practice.less';

export class LoginPage extends React.Component{

    render(): React.ReactNode {
        console.log('login page render')

        const store = loginStore

        return (
            <div className={"module-login"}>
                <div >
                    <LoginForm store={store}/>
                </div>
            </div>
        );
    }
}