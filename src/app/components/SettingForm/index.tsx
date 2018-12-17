import * as React from 'react';
import {observer} from "mobx-react";
import settingStore, {SettingStore} from "app/stores/SettingStore";
import './style.less';

@observer
export class SettingForm extends React.Component {

    store: SettingStore = settingStore;

    componentDidMount() {
        this.store.fetchUser();
    }

    handlerImageChange = (e) => {
        e.preventDefault();
        this.store.setImages(e.target.value);
    };

    handlerNameChange = (e) => {
        e.preventDefault();
        this.store.setName(e.target.value);
    };

    handlerBioChange = (e) => {
        e.preventDefault();
        this.store.setBio(e.target.value);
    };

    handlerEmailChange = (e) => {
        e.preventDefault();
        this.store.setEmail(e.target.value);
    };

    handlerPasswordChange = (e) => {
        e.preventDefault();
        this.store.setPassword(e.target.value);
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.store.updateUser();
        history.back();
    };


    render() {
        if(!this.store.userModel) {
            return null;
        }
        return (
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'text'} className={'form-control'} placeholder={'URL of profile picture'} value={this.store.getImage()} onChange={this.handlerImageChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'text'} className={'form-control form-control-lg'} placeholder={'Username'} value={this.store.getName()} onChange={this.handlerNameChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <textarea rows={4} className={'form-control form-control-lg'} placeholder={'Short bio about you'} value={this.store.getBio()} onChange={this.handlerBioChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'email'} className={'form-control form-control-lg'} placeholder={'Email'} value={this.store.getEmail()} onChange={this.handlerEmailChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'password'} className={'form-control form-control-lg'} placeholder={'New password'} value={this.store.getPassword()} onChange={this.handlerPasswordChange}/>
                    </fieldset>
                    <button className={'btn btn-lg btn-primary pull-xs-right'} type={'submit'}>Update Settings</button>
                </fieldset>
            </form>
        )
    }
}