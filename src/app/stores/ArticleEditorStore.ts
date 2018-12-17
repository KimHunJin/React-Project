import {action, observable} from "mobx";
import APIConn from "../../lib/http/service_util";

class EditorStore {

    @observable slug: any;
    @observable title: string;
    @observable body: string;
    @observable description: string;
    @observable tagSet: Set<string> = new Set();
    @observable tag: string;

    @observable tagList: string[] = [];

    @action setTitle(title) {
        this.title = title;
    }

    @action removeTag(tag) {
        this.tagSet.delete(tag);
        this.syncTagList();
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

    @action syncTagList() {
        this.tagList= [];
        this.tagSet.forEach(value => {
            this.tagList.push(value);
        })
    }

    @action addTagList(tag) {
        this.tagSet.add(tag);
        this.syncTagList();
    }

    @action submit() {

        const article = {
            article: {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: this.tagList
            }
        };

        APIConn.getInstance().postCreateArticle(true, article).then(res => {
            
        })
    }

    @action update(slug:string) {
        const article = {
            article: {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: this.tagList
            }
        };

        APIConn.getInstance().putUpdateArticle(slug, article).then(res => {

        })
    }
}

const editorStore = new EditorStore();
export default editorStore
export {EditorStore}