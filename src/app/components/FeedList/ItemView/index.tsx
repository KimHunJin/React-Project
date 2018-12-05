import * as React from 'react'
import './style.less'
import {ItemListUserInfo} from "app/components/FeedList/ItemView/ItemListUserInfo";
import {ItemListFeedContent} from "app/components/FeedList/ItemView/ItemListFeedContent";



export class ItemView extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <ItemListUserInfo/>
                <ItemListFeedContent/>
            </div>
        )
    }
}
