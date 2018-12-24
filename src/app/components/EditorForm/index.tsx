import * as React from 'react'
import {observer} from "mobx-react";
import {ENTER_KEY} from "app/constants/Code";
import {EditorStore} from "app/stores/ArticleEditorStore";
import './practice.less';

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
        if (e.keyCode == ENTER_KEY) {
            store.addTagList(e.target.value);
            store.tag = '';
        }
    };

    handlerSubmit = (e) => {
        const store = this.props.store;
        const slug = this.props.store.slug;
        if (slug) {
            store.update(slug);
        } else {
            store.submit();
        }

        store.title = '';
        store.description = '';
        store.body = '';
        store.tagList = [];
        store.tagSet.clear();
        history.back();
    };

    preventSubmit = (e) => {
        return false;
    };

    render() {
        console.log('edit form render')
        return (
            <form className="module-editor" onSubmit={this.preventSubmit}>
                <fieldset>
                    <fieldset>
                        <input className="text-input"
                            type={'text'} placeholder={"Article Title"}
                            value={this.props.store.title}
                               onChange={this.handlerTitleChange} />
                    </fieldset>

                    <fieldset >
                        <input className="text-input"
                            type={'text'} placeholder={"What's this article about?"}
                            value={this.props.store.description}
                               onChange={this.handlerDescriptionChange} />
                    </fieldset>

                    <fieldset >
                        <textarea className="text-input"
                            rows={8} placeholder={"Write your article (in markdown)"}
                            value={this.props.store.body}
                                  onChange={this.handlerBodyChange} />
                    </fieldset>

                    <fieldset >
                        <input className="text-input"
                            type={'text'} value={this.props.store.tag}
                               placeholder={"Enter tags"}
                               onKeyDown={this.handlerTagKeyDown} onChange={(e) => {
                            this.props.store.tag = e.target.value;
                        }}/>
                        <div >
                            {this.props.store.tagList.map(tag => (
                                <span className="tag" key={tag}>
                                <i className={"ion-close-round"}
                                   onClick={
                                       () => {
                                           this.props.store.removeTag(tag)
                                       }
                                   }/>{tag}
                            </span>))
                            }
                        </div>
                    </fieldset>


                    <button className="submit-button"
                        type={"button"}
                            onClick={this.handlerSubmit}>Publish Article
                    </button>
                </fieldset>
            </form>
        )
    }
}
