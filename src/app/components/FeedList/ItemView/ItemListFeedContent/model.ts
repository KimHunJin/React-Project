import {Article} from "app/models/article";
import {Author} from "app/models/author";
import {observable} from "mobx";

export class FeedModel implements Article {
    slug?: string
    title?: string
    description?: string
    body?: string
    tagList?: string[]
    createAt?: string
    updateAt?: string
    @observable favorited?: boolean
    @observable favoritesCount?: number
    author?: UserModel

    constructor(title: string, body: string, tagList: string[], createAt: string, author: UserModel) {
        this.title = title
        this.body = body
        this.tagList = tagList
        this.createAt = createAt
        this.author = author
    }
}


export class UserModel implements Author {
    bio: string;
    following: boolean;
    image: string;
    username: string;

    constructor(bio, following, image, username) {
        this.bio = bio
        this.following = following
        this.image = image
        this.username = username
    }
}