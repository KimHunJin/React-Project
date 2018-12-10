import * as React from 'react'
import {RegisterForm} from "app/components/RegisterForm";

export class RegisterPage extends React.Component{

    render() {
        return (
            <div className={"auth-page"}>
                <div className={"container page"}>
                    <RegisterForm/>
                </div>
            </div>
        );
    }
}