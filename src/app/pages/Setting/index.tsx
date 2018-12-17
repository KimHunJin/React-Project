import * as React from 'react';
import {SettingForm} from "app/components/SettingForm";
import settingStore from "app/stores/SettingStore";
import userStore from "app/stores/UserStore";

export class SettingPage extends React.Component {

    handlerLogout = (e) => {
        userStore.logout();
        history.back();
    };

    render() {
        return (
            <div className={"settings-page"}>
                <div className={"container page"}>
                    <div className={"col-md-6 offset-md-3 col-xs-12"}>
                        <h1 className={"text-xs-center"}>Your Settings</h1>
                        <SettingForm store={settingStore}/>
                        <hr/>
                        <button className={'btn btn-outline-danger'} onClick={this.handlerLogout}>Or click here to
                            logout.
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}