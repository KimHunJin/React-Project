import * as React from 'react'
import {Link} from "react-router-dom";
import {RegisterStore} from 'app/stores/RegistStore'
import {observer} from "mobx-react";

interface Props {
    store: RegisterStore;
}

@observer
export class RegisterForm extends React.Component<Props> {

    handlerChangeName = (e) => {
        this.props.store.username = e.target.value
    };

    handlerChangeEmail = (e) => {
        this.props.store.email = e.target.value
    };

    handlerChangePassword = (e) => {
        this.props.store.password = e.target.value
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.store.submit();
    };

    render() {
        console.log('register form render')
        return (
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 col-xs-12"}>
                    <h1 className={"text-xs-center"}>Sign Up</h1>
                    <p className={"text-xs-center"}>
                    <Link to={'/login'}><p>Have an account?</p></Link>
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"text"} className={"form-control form-control-lg"} placeholder={"Username"}
                                       onChange={this.handlerChangeName}/>
                            </fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"email"} className={"form-control form-control-lg"} placeholder={"Email"}
                                       onChange={this.handlerChangeEmail}/>
                            </fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"password"} className={"form-control form-control-lg"}
                                       placeholder={"Password"}
                                       onChange={this.handlerChangePassword}/>
                            </fieldset>
                            <button className={"btn btn-lg btn-primary pull-xs-right"} type={"submit"}>
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}