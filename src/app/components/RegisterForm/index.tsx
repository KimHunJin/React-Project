import * as React from 'react'
import {Link} from "react-router-dom";

export class RegisterForm extends React.Component {
    render() {
        return (
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 col-xs-12"}>
                    <h1>Sign Up</h1>
                    <Link to={'/login'}><p>Have an account?</p></Link>

                    <form>
                        <fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"text"} className={"form-control form-control-lg"} placeholder={"Username"}/>
                            </fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"email"} className={"form-control form-control-lg"} placeholder={"Email"}/>
                            </fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"password"} className={"form-control form-control-lg"}
                                       placeholder={"Password"}/>
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