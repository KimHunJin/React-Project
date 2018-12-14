import {observable} from "mobx";
import {CommentModel} from "app/model/CommentModel";

class CommentStore {
    @observable commentList: CommentModel[];
}

const commentStore = new CommentStore();
export default commentStore;
export {CommentStore};