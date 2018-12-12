import * as React from 'react'
import {observer} from "mobx-react";
import {ENTER_KEY} from "app/constants/Code";
import {EditorStore} from "app/stores/EditorStore";


interface Props {
    store: EditorStore
}

@observer
export class EditorForm extends React.Component<Props> {

    handlerTitleChange = (e) => {
        e.preventDefault();
        const store = this.props.store;
        store.setTitle(e.target.value);
    };

    handlerDescriptionChange = (e) => {
        e.preventDefault();
        const store = this.props.store;
        store.setDescription(e.target.value);
    };

    handlerBodyChange = (e) => {
        e.preventDefault();
        const store = this.props.store;
        store.setBody(e.target.value);
    };

    handlerTagKeyDown = (e) => {
        const store = this.props.store;
        if(e.keyCode == ENTER_KEY) {
            store.addTagList(e.target.value);
            e.target.value = '';
        }
    };

    handlerSubmit = (e) => {
        const store = this.props.store;
        store.submit();
        history.back();
    };

    preventSubmit = (e) => {
        return false;
    };


    render() {
        return (
            <form onSubmit={this.preventSubmit}>
                <fieldset>

                    <fieldset>
                        <input type={'text'} placeholder={"Article Title"} onChange={this.handlerTitleChange}/>
                    </fieldset>

                    <fieldset>
                        <input type={'text'} placeholder={"What's this article about?"}
                               onChange={this.handlerDescriptionChange}/>
                    </fieldset>

                    <fieldset>
                        <input type={'text'} placeholder={"Write your article (in markdown"}
                               onChange={this.handlerBodyChange}/>
                    </fieldset>

                    <fieldset>
                        <input type={'text'} placeholder={"Enter tags"} onKeyDown={this.handlerTagKeyDown} />
                    </fieldset>
                    {this.props.store.tagList &&
                    <ul>
                        {this.props.store.tagList.map(tag => (
                            <li key={tag.id}>{tag.tag}</li>
                        ))}
                    </ul>}

                    <button type={"button"} onClick={this.handlerSubmit}>Publish Article</button>
                </fieldset>
            </form>
        )
    }
}
