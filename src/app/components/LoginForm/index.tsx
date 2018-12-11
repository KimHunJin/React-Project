import * as React from 'react'
import {Link} from "react-router-dom";
import {LoginStore} from "app/stores/LoginStore";
import './style.less'
import {observer} from "mobx-react";


interface Props {
    store: LoginStore;
}

@observer
export class LoginForm extends React.Component<Props> {

    emailChangeHandler = (e) => {
        this.props.store.email = e.target.value
    };

    passwordChangeHandler = (e) => {
        this.props.store.password = e.target.value
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.store.submit();
        history.back();
    }

    render() {
        return (

            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 col-xs-12"}>
                    <h1 className={"text-xs-center"}>Sign In</h1>
                    <p className={"text-xs-center"}>
                        <Link to={'/register'}><p>Need an account?</p></Link>
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"email"} className={"form-control form-control-lg"} placeholder={"Email"}
                                onChange={this.emailChangeHandler}/>
                            </fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"password"} className={"form-control form-control-lg"}
                                       placeholder={"Password"}
                                onChange={this.passwordChangeHandler}/>
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