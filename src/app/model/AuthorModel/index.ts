import {Author} from "app/modelsInteface/author";

export class AuthModel implements Author {
    bio: string;
    following: boolean;
    image: string;
    username: string;

    constructor(bio, following, image, username) {
        this.bio = bio;
        this.following = following;
        this.image = image;
        this.username = username;
    }
}