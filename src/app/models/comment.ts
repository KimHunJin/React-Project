import {Author} from "app/models/author";

export interface Comment {
    id : number
    createdAt : string
    updatedAt : string
    body: string
    author: Author
}