import {AuthModel} from "app/model/AuthorModel";
import {Comment} from "app/modelsInteface/comment";

export class CommentModel implements Comment{
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: AuthModel

    constructor(id, createdAt, updatedAt, body, author) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.body = body;
        this.author = author;
    }
}