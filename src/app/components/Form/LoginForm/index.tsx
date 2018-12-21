import * as React from 'react'
import {Link} from "react-router-dom";
import {LoginStore} from "app/stores/LoginStore";
import {observer} from "mobx-react";
import '../practice.less';


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
        this.props.store.loginSubmit();
        history.back();
    };

    render() {
        console.log('login form render')
        return (

            <div className={'module-form'}>
                <div>
                    <h1 className={'form-title'}>Sign In</h1>
                    <p className="form-link">
                        <Link  to={'/register'}>Need an account?</Link>
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <fieldset className="form-field-set">
                                <input className="form-input" type={"email"} placeholder={"Email"}
                                 onChange={this.emailChangeHandler}/>
                            </fieldset>
                            <fieldset className="form-field-set">
                                <input className="form-input" type={"password"}
                                       placeholder={"Password"}
                                onChange={this.passwordChangeHandler}/>
                            </fieldset>
                            <button className="form-submit" type={"submit"}>
                                Sign in
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}