import * as React from 'react'
import {DomProps} from "../../../../lib/props/dom-props";


export interface Props extends DomProps{

}

export class TopNavigation extends React.Component {
    render(): React.ReactNode {
        return (
            <h1
                className={"header"}

            >
                navigation
            </h1>
        )
    }
}