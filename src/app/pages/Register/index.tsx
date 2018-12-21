import * as React from 'react'
import {RegisterForm} from "app/components/Form/RegisterForm";
import registerStore from "app/stores/RegistStore";
import './practice.less';

export class RegisterPage extends React.Component{

    render() {
        console.log('register page render')
        return (
            <div>
                <div className="module-register">
                    <RegisterForm store={registerStore}/>
                </div>

            </div>
        );
    }
}