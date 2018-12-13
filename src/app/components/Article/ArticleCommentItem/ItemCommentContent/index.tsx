import * as React from 'react';
import {CommentModel} from "app/model/CommentModel";

interface Props {
    store: CommentModel;
}

export class ArticleItemContent extends React.Component<Props> {

    render(): React.ReactNode {
        return (
            <div>
                {this.props.store.body}
            </div>
        )
    }
}