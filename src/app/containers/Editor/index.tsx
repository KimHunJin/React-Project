import * as React from 'react'
import editorStore from "app/stores/EditorStore";
import {EditorForm} from "app/components/Editor";


export class EditorPage extends React.Component{

    render(): React.ReactNode {

        const store = editorStore

        return (
            <div className={"auth-page"}>
                <div className={"container page"}>
                    <EditorForm store={store}/>
                </div>
            </div>
        );
    }
}