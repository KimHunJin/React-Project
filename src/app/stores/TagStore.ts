import {observable} from "mobx";
import {TagModel} from "app/model/TagModel/index";

class TagStore {
    @observable tagModels : TagModel[] = []
}

const tagStore = new TagStore();
export default tagStore
export {TagStore}