import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";

interface Props {
    store: CommentModel;
}

export class ArticleItemContent extends React.Component<Props> {

    render(): React.ReactNode {
        console.log('comment item content render')

        return (
            <div className={"card-block"}>
                <p className={"card-text"}>{this.props.store.body}</p>
            </div>
        )
    }
}