import {action, observable} from "mobx";
import APIConn from "../../lib/http/service_util";
import {TagModel} from "app/model/TagModel";

class EditorStore {

    @observable title: string;
    @observable body: string;
    @observable description: string;
    @observable tagList: TagModel[] = [];
    @observable tag: string;

    @action setTitle(title) {
        this.title = title;
    }

    @action setDescription(description) {
        this.description = description;
    }

    @action setBody(body) {
        this.body = body;
    }

    @action setTag(tag) {
        this.tag = tag;
    }

    @action addTagList(tag) {
        this.tagList.push(new TagModel(tag));
    }

    @action submit() {

        const article = {
            article : {
                title : this.title,
                description: this.description,
                body: this.body,
                tagList: this.tagList.map(v => v.tag)
            }
        };

        APIConn.getInstance().postCreateArticle(true, article).then(res => {
            console.log(res);
        })
    }
}

const editorStore = new EditorStore();
export default editorStore
export {EditorStore}