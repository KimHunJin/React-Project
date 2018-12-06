import './style.less'
import * as React from 'react';
import {Component} from 'react';
import {inject} from "mobx-react";

// render react DOM

@inject('store')
export class App extends Component {

    render(): React.ReactNode {
        return(
            <div></div>
        )
    }
}
