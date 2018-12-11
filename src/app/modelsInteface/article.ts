import {Author} from "app/modelsInteface/author";
import {TagModel} from "app/model/TagModel/index";

export interface Article {
    slug?: string
    title?: string
    description?: string
    body?: string
    tagList?: TagModel[]
    createAt?: string
    updateAt?: string
    favorited?: boolean
    favoritesCount?: number
    author?: Author
}

