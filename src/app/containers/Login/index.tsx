import * as React from 'react'
import {observer} from "mobx-react";
import {LoginForm} from "app/components/LoginForm";

@observer
export class LoginPage extends React.Component{

    render(): React.ReactNode {
        return (
            <div className={"auth-page"}>
                <div className={"container page"}>
                    <LoginForm/>
                </div>
            </div>
        );
    }
}