import * as React from 'react';
import userStore from "app/stores/UserStore";
import {Link} from "react-router-dom";

export class ArticleEditor extends React.Component {

    handlerCommentSubmit = () => {

    }

    render() {
        if(userStore.userModel) {
            return (
                <form className={"card comment-form"}>
                    <div className={"card-block"}>
                    <textarea className={"form-control"} placeholder={"Write a comment..."} rows={3}>

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