import * as React from 'react'
import {Link} from "react-router-dom";
import {LoginStore} from "app/stores/LoginStore";


interface Props {
    store: LoginStore;
}


export class LoginForm extends React.Component<Props> {

    constructor(props) {
        super(props)
    }

    emailChangeHandler = (e) => {
        this.props.store.email = e.target.value
    };

    passwordChangeHandler= (e) => {
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
                    <h1>Sign In</h1>
                    <Link to={'/register'}><p>Need an account?</p></Link>

                    <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"email"} className={"form-control form-control-lg"} placeholder={"Email"}
                                       value={this.props.store.email} onChange={this.emailChangeHandler}/>
                            </fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"password"} className={"form-control form-control-lg"}
                                       placeholder={"Password"} value={this.props.store.password}
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