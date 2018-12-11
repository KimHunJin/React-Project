import {User} from "app/modelsInteface/index";

export class UserModel implements User {
    id: number;
    bio: string;
    email: string;
    image?: string;
    token: string;
    username: string;

    constructor(id, bio, email, image, token, username) {
        this.bio = bio;
        this.email = email;
        this.image = image;
        this.token = token;
        this.username = username;
    }
}