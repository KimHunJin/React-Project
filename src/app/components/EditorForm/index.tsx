import * as React from 'react'
import {observer} from "mobx-react";
import {ENTER_KEY} from "app/constants/Code";
import {EditorStore} from "app/stores/EditorStore";
import './style.less';

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
        store.submit();
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

         return (
            <form onSubmit={this.preventSubmit}>
                <fieldset>
                    <fieldset className={"form-group"}>
                        <input className={"form-control form-control-lg"} type={'text'} placeholder={"Article Title"}
                               onChange={this.handlerTitleChange} value={this.props.store.title}/>
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <input className={"form-control"} type={'text'} placeholder={"What's this article about?"}
                               onChange={this.handlerDescriptionChange} value={this.props.store.description}/>
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <textarea className={"form-control"} rows={8} placeholder={"Write your article (in markdown)"}
                                  onChange={this.handlerBodyChange} value={this.props.store.body}/>
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <input className={"form-control"} type={'text'} value={this.props.store.tag}
                               placeholder={"Enter tags"}
                               onKeyDown={this.handlerTagKeyDown} onChange={(e) => {
                            this.props.store.tag = e.target.value;
                        }}/>
                        <div className={"tag-list"}>
                            {this.props.store.tagList.map(tag => (
                                <span key={tag} className={'tag-default tag-pill'}>
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


                    <button className={'btn btn-lg pull-xs-right btn-primary'} type={"button"}
                            onClick={this.handlerSubmit}>Publish Article
                    </button>
                </fieldset>
            </form>
        )
    }
}
