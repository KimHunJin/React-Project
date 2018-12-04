import * as React from 'react'
import './style.less'



export class Banner extends React.Component {
    render(): React.ReactNode {
        return (
            <div className={"banner"}>
                <div className={"container"}>
                    <h1 className={"logo-font"}>React...</h1>
                    <p>React is Web Front Javascript Library</p>
                </div>
            </div>
        )
    }
}