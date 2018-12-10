import {action, observable} from "mobx";
import {TagModel} from "app/components/Tags/TagModel/model";

class TagStore {

    @observable tagModels : TagModel[] = []

    @action setTag(tagModel: TagModel) {
        this.tagModels.push(tagModel)
    }
}

const tagStore = new TagStore();
export default tagStore
export {TagStore}