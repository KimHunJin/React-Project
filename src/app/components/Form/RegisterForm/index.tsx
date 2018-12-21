import * as React from 'react'
import {Link} from "react-router-dom";
import {RegisterStore} from 'app/stores/RegistStore'
import {observer} from "mobx-react";
import {OK} from "app/constants/Code";
import '../practice.less';

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
        this.props.store.submit().then(res=>{
            if(res === OK) {
                history.back();
                return;
            }
        });
    };

    render() {
        console.log('register form render')
        return (
            <div className="module-form">
                <div >
                    <h1 className="form-title">Sign Up</h1>
                    <p className="form-link">
                    <Link to={'/login'}><p>Have an account?</p></Link>
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <fieldset>
                            <fieldset className="form-field-set">
                                <input className="form-input" type={"text"} placeholder={"Username"}
                                       onChange={this.handlerChangeName}/>
                            </fieldset>
                            <fieldset className="form-field-set">
                                <input className="form-input" type={"email"}  placeholder={"Email"}
                                       onChange={this.handlerChangeEmail}/>
                            </fieldset>
                            <fieldset className="form-field-set">
                                <input className="form-input" type={"password"}
                                       placeholder={"Password"}
                                       onChange={this.handlerChangePassword}/>
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