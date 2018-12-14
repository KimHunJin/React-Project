import {action, observable} from "mobx";
import APIConn from "../../lib/http/service_util";
import commentStore from "app/stores/CommentStore";

class CommentEditorStore {
    @observable comment: string;

    @action setComment(comment) {
        this.comment = comment;
    }

    @action submit(slug) {
        const comment = {
            comment: {
                body: this.comment
            }
        };

        APIConn.getInstance().postAddComment(true, slug, comment).then(res => {
            commentStore.getComment(slug);
        })
    }
}

const commentEditorStore = new CommentEditorStore();
export default commentEditorStore;
export {CommentEditorStore};