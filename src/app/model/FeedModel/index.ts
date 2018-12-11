import {Author} from "app/modelsInteface/author";
import {Article} from "app/modelsInteface/article";
import {TagModel} from "app/model/TagModel/index";
import {observable} from "mobx";

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


export class AuthModel implements Author {
    id: number;
    bio: string;
    following: boolean;
    image: string;
    username: string;

    constructor(id, bio, following, image, username) {
        this.id = id;
        this.bio = bio;
        this.following = following;
        this.image = image;
        this.username = username;
    }

}