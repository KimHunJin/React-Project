import * as React from 'react'

export class LoginForm {
    render() {
        return (
            <div className={"row"}>
                <div className={"col-md-6 offset-md-3 col-xs-12"}>
                    <h1>Sign In</h1>
                    <p>Need an account?</p>

                    <form>
                        <fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"email"} className={"form-control form-control-lg"} placeholder={"Email"}/>
                            </fieldset>
                            <fieldset className={"form-group"}>
                                <input type={"password"} className={"form-control form-control-lg"} placeholder={"Password"}/>
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