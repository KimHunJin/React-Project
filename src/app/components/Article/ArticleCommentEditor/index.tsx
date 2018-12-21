import * as React from 'react';
import userStore from "app/stores/UserStore";
import {Link} from "react-router-dom";
import commentEditorStore from "app/stores/CommentEditorStore";
import {FeedModel} from "app/model/FeedModel";
import './practice.less';

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

    handlerTextChange = (e) => {
        e.preventDefault();
        const editorStore = commentEditorStore;
        editorStore.comment = e.target.value;
    };

    render() {
        console.log('article comment editor render');
        if (userStore.userModel) {
            return (
                <form className="module-login-comment-form">
                    <div className="comment-area-size">
                        <textarea className="comment-area"
                                  placeholder={"Write a comment..."} rows={3} onChange={this.handlerTextChange}>
                        {commentEditorStore.comment}
                        </textarea>
                    </div>
                    <div className="comment-user-size">
                        <img className="user-img"/>
                        <button className="comment-post"
                                onClick={this.handlerCommentSubmit}>
                            Post Comment
                        </button>
                    </div>
                </form>
            )
        } else {
            return (
                <p className="module-non-login-text">
                    <Link className="link" to={"/login"}>Sign in</Link>
                    &nbsp;or&nbsp;
                    <Link className="link" to={"/register"}>Sign up</Link>
                    &nbsp;to add comments on this article.
                </p>
            )
        }

    }
}