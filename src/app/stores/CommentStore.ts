import {action, observable} from "mobx";
import {CommentModel} from "app/model/CommentModel";
import APIConn from "../../lib/http/service_util";
import userStore from "app/stores/UserStore";

class CommentStore {
    @observable commentList: CommentModel[];
    @observable slug: any;

    @action getComment(slug) {
        APIConn.getInstance().getComment(slug, userStore.userModel ? true : null).then(
            res => {
                const comments = res.data.comments;

                commentStore.commentList = comments.map(data => {
                    return new CommentModel(data.id, data.createdAt, data.updatedAt, data.body, data.author);
                });
            }
        );
    }

    @action deleteComment(id) {
        APIConn.getInstance().deleteComment(userStore.userModel ? true : null, this.slug, id).then(res => {
            this.getComment(this.slug);
        })
    }
}

const commentStore = new CommentStore();
export default commentStore;
export {CommentStore};