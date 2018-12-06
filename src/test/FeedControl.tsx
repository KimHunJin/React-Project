import {inject, observer} from "mobx-react";
import * as React from "react";
import apiStore, {ApiStore} from "./apiStore";

interface Props {
    apiStore: ApiStore
}


@inject('apiStore')
@observer
class FeedControl extends React.Component<Props> {
    constructor(props) {
        super(props)
    }

    componentDidMount(): void {
        apiStore.getList();
    }

    render(): React.ReactNode {
        const test: ApiStore = this.props.apiStore

        return (
            <div className={'aaa'}>
                {test.articles.map((model, key) => {
                    return (
                        <div key = {key}>{model.body}</div>
                    )
                })}
            </div>
        )
    }
}

export default FeedControl