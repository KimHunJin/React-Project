import * as React from 'react'
import {RegisterForm} from "app/components/RegisterForm";
import registerStore from "app/stores/RegistStore";

export class RegisterPage extends React.Component{

    render() {
        return (
            <div className={"auth-page"}>
                <div className={"container page"}>
                    <RegisterForm store={registerStore}/>
                </div>

            </div>
        );
    }
}