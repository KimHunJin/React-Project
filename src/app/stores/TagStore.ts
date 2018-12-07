import {action, computed, observable} from "mobx";

class TagStore {

    id: number

    static nextId = 1;

    static generateId() {
        return this.nextId++
    }

    @observable tags: string[]

    constructor(tags: string[] = []) {
        this.tags = tags
        this.id = TagStore.generateId()
    }

    @action setTag(tag: string) {
        this.tags.push(tag)
    }

    @computed get getTag(): string[] {
        return this.tags
    }
}

const tagStore = new TagStore()
export default tagStore
export {TagStore}