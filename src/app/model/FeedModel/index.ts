import {Article} from "app/modelsInteface/article";
import {TagModel} from "app/model/TagModel/index";
import {observable} from "mobx";
import {AuthModel} from "app/model/AuthorModel";

export class FeedModel implements Article {
    readonly id: number;
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: TagModel[];
    createAt: string;
    updateAt: string;
    @observable favorited: boolean;
    @observable favoritesCount: number;
    author: AuthModel;

    constructor(title: string, body: string, tagList: TagModel[], createAt: string, author: AuthModel, favoritesCount: number, favorited: boolean, slug?: string, description?: string, updateAt? : string) {
        this.id = FeedModel.generateId();
        this.title = title;
        this.body = body;
        this.tagList = tagList;
        this.createAt = createAt;
        this.author = author;
        this.slug = slug;
        this.description = description;
        this.favorited = favorited;
        this.favoritesCount = favoritesCount;
        this.updateAt = updateAt
    }

    static nextId = 1;

    static generateId() {
        return this.nextId++
    }
}


