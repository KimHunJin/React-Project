import * as React from 'react';
import userStore from "app/stores/UserStore";
import {Link} from "react-router-dom";
import commentEditorStore from "app/stores/CommentEditorStore";
import {FeedModel} from "app/model/FeedModel";

interface Props {
    store: FeedModel;
}

export class ArticleEditor extends React.Component<Props> {

    handlerCommentSubmit = (e) => {
        e.preventDefault();
        const editorStore = commentEditorStore;
        const store = this.props.store;

        editorStore.submit(store.slug);
        editorStore.comment = '';
    };

    handlerTextChange= (e) => {
        e.preventDefault();
        const editorStore = commentEditorStore;
        editorStore.comment = e.target.value;
    };

    render() {
        console.log('article comment editor render');
        if(userStore.userModel) {
            return (
                <form className={"card comment-form"}>
                    <div className={"card-block"}>
                    <textarea className={"form-control"} placeholder={"Write a comment..."} rows={3} onChange={this.handlerTextChange}>
                        {commentEditorStore.comment}
                    </textarea>
                    </div>
                    <div className={"card-footer"}>
                        <img className={"comment-author-img"}/>
                        <button className={"btn btn-sm btn-primary"} onClick={this.handlerCommentSubmit}>Post Comment
                        </button>
                    </div>
                </form>
            )
        } else {
            return(
                <p>
                    <Link to={"/login"}>Sign in</Link>
                    &nbsp;or&nbsp;
                    <Link to={"/register"}>Sign up</Link>
                    &nbsp;to add comments on this article.
                </p>
            )
        }

    }
}