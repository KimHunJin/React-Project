import {Author} from "app/models_interface/author";

export interface Comment {
    id : number
    createdAt : string
    updatedAt : string
    body: string
    author: Author
}