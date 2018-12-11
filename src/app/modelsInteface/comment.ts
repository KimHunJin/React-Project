import {Author} from "app/modelsInteface/author";

export interface Comment {
    id : number
    createdAt : string
    updatedAt : string
    body: string
    author: Author
}