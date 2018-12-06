import {Article} from "app/models_interface/article";
import {Author} from "app/models_interface/author";
import {observable} from "mobx";

export class FeedModel implements Article {
    readonly id: number;
    slug?: string;
    title?: string;
    description?: string;
    body?: string;
    tagList?: string[];
    createAt?: string;
    updateAt?: string;
    @observable favorited?: boolean;
    @observable favoritesCount?: number;
    author?: UserModel;

    constructor(title: string, body: string, tagList: string[], createAt: string, author: UserModel) {
        this.id = FeedModel.generateId();
        this.title = title;
        this.body = body;
        this.tagList = tagList;
        this.createAt = createAt;
        this.author = author;
    }

    static nextId = 1;
    static generateId() {
        return this.nextId++
    }
}


export class UserModel implements Author {
    id: number;
    bio: string;
    following: boolean;
    image: string;
    username: string;

    constructor(bio, following, image, username) {
        this.id = UserModel.generateId();
        this.bio = bio;
        this.following = following;
        this.image = image;
        this.username = username;
    }

    static nextId = 1;
    static generateId() {
        return this.nextId++
    }
}