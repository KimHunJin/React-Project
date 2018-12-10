import {observable} from "mobx";
import {TagModel} from "app/components/Tags/TagModel/model";

class TagStore {
    @observable tagModels : TagModel[] = []
}

const tagStore = new TagStore();
export default tagStore
export {TagStore}