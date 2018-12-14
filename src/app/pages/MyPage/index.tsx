import * as React from 'react';
import {MyPageBanner} from "app/components/MyPage/MyPageBanner";
import profileStore from "app/stores/ProfileStore";
import {observer} from "mobx-react";

@observer
export class MyPage extends React.Component {

    componentDidMount() {
        const {match}: any = this.props;
        const username = match.params.username;


        profileStore.getProfile(username)
    }

    render() {

        return (
            <div>
                <MyPageBanner store={profileStore}/>
            </div>
        )
    }
}