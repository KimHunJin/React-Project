import * as React from 'react';
import {SettingForm} from "app/components/SettingForm";

export class SettingPage extends React.Component {
    render() {
        return(
            <div>
                <h1>Your Settings</h1>
                <SettingForm/>
                <hr />
                <button>Or click here to logout.</button>
            </div>
        )
    }
}