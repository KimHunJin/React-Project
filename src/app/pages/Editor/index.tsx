import * as React from 'react'
import editorStore from "app/stores/ArticleEditorStore";
import {EditorForm} from "app/components/EditorForm";
import APIConn from "../../../lib/http/service_util";
import userStore from "app/stores/UserStore";


export class EditorPage extends React.Component{

    componentDidMount() {
        console.log('editor page component did mount')
        const store = editorStore;
        const {match}: any = this.props;
        store.slug = match.params.slug;
        if (match.params.slug) {
            APIConn.getInstance().getArticle(match.params.slug, userStore.userModel ? true : null).then(
                res => {
                    const data = res.data.article;
                    store.setTitle(data.title);
                    store.setBody(data.body);
                    store.setDescription(data.description);
                    data.tagList.map(tag => {
                        store.addTagList(tag);
                    });
                }
            );
        }
    }

    render(): React.ReactNode {
        console.log('editor page render')

        const store = editorStore;
        return (
            <div className={"auth-page"}>
                <div className={"container page"}>
                    <EditorForm store={store}/>
                </div>
            </div>
        );
    }
}