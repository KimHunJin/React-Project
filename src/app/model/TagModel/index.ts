import {Tag} from "app/modelsInteface/tag";

export class TagModel implements Tag {
    id: number;
    tag: string;

    constructor(tag: string) {
        this.id = TagModel.generateId()
        this.tag = tag
    }

    static nextId = 1;

    static generateId() {
        return this.nextId++
    }
}