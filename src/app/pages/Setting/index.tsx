import * as React from 'react';
import {SettingForm} from "app/components/SettingForm";
import settingStore from "app/stores/SettingStore";
import userStore from "app/stores/UserStore";
import './practice.less';

export class SettingPage extends React.Component {

    handlerLogout = (e) => {
        userStore.logout();
        history.back();
    };

    render() {
        return (
            <div className="module-setting">
                <div className="module-setting-size">
                    <div >
                        <h1 className="setting-title">Your Settings</h1>
                        <SettingForm store={settingStore}/>
                        <hr/>
                        <button className="logout-button" onClick={this.handlerLogout}>Or click here to
                            logout.
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}