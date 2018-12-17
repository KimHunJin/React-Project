import * as React from 'react';
import {observer} from "mobx-react";
import {SettingStore} from "app/stores/SettingStore";
import './style.less';

interface Props {
    store: SettingStore;
}

@observer
export class SettingForm extends React.Component<Props> {

    componentDidMount() {
        this.props.store.fetchUser();
    }

    handlerImageChange = (e) => {
        this.props.store.image = e.target.value;
    };

    handlerNameChange = (e) => {
        this.props.store.username = e.target.value;
    };

    handlerBioChange = (e) => {
        this.props.store.bio = e.target.value;
    };

    handlerEmailChange = (e) => {
        this.props.store.email = e.target.value;
    };

    handlerPasswordChange = (e) => {
        this.props.store.password = e.target.value;
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.store.updateUser();
        history.back();
    };


    render() {
        if (!this.props.store.username) {
            return null;
        }
        return (
            <form onSubmit={this.onSubmit}>
                <fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'text'} className={'form-control'} placeholder={'URL of profile picture'}
                               value={this.props.store.image} onChange={this.handlerImageChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'text'} className={'form-control form-control-lg'} placeholder={'Username'}
                               value={this.props.store.username} onChange={this.handlerNameChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <textarea rows={8} className={'form-control form-control-lg'}
                                  placeholder={'Short bio about you'} value={this.props.store.bio}
                                  onChange={this.handlerBioChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'email'} className={'form-control form-control-lg'} placeholder={'Email'}
                               value={this.props.store.email} onChange={this.handlerEmailChange}/>
                    </fieldset>
                    <fieldset className={'form-group'}>
                        <input type={'password'} className={'form-control form-control-lg'} placeholder={'New password'}
                               value={this.props.store.password} onChange={this.handlerPasswordChange}/>
                    </fieldset>
                    <button className={'btn btn-lg btn-primary pull-xs-right'} type={'submit'}>Update Settings</button>
                </fieldset>
            </form>
        )
    }
}