import * as React from 'react'
import './style.less'

export class Footer extends React.Component {
    render(): React.ReactNode {
        return (
            <a href="https://github.com/KimHunJin" target="_blank">
                <i className="ion-social-github"></i>
                &nbsp;Goto Hunjin's GitHub
            </a>
        )
    }
}