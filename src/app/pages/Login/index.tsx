import * as React from 'react'
import {LoginForm} from "app/components/LoginForm";
import loginStore from "app/stores/LoginStore";


export class LoginPage extends React.Component{

    render(): React.ReactNode {
        console.log('login page render')

        const store = loginStore

        return (
            <div className={"auth-page"}>
                <div className={"container page"}>
                    <LoginForm store={store}/>
                </div>
            </div>
        );
    }
}