import {observer} from "mobx-react";
import * as React from "react";
import apiStore, {ApiStore} from "./apiStore";
import {getList} from "./api";
import {FeedModel} from "app/components/Feed/FeedModel/model";

interface Props {
    apiStore: ApiStore
}

@observer
class FeedControl extends React.Component<Props> {
    constructor(props) {
        super(props)
    }

    componentDidMount(): void {
        getList().then(res => {
            res.data.articles.map((article) => {
                apiStore.setArticle(new FeedModel(article.title, article.body, article.tagList, article.createAt, article.author))
            })
        })
    }


    render(): React.ReactNode {
        const store = apiStore as ApiStore
        return (
            <div className={'aaa'}>
                {store.articles.map((model, key) => {
                    return (
                        <div key={key}>{model.body}</div>
                    )
                })}
            </div>
        )
    }
}

export default FeedControl