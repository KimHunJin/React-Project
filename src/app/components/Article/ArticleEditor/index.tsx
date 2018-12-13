import * as React from 'react';

export class ArticleEditor extends React.Component {

    handlerCommentSubmit = () => {

    }

    render() {
        return (
            <form>
                <textarea rows={4}>

                </textarea>
                <span>
                    <button onClick={this.handlerCommentSubmit}/>
                </span>
            </form>
        )
    }
}