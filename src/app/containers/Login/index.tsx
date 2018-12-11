import * as React from 'react'
import {observer} from "mobx-react";
import {LoginForm} from "app/components/LoginForm";
import loginStore from "app/stores/LoginStore";

@observer
export class LoginPage extends React.Component{

    render(): React.ReactNode {

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