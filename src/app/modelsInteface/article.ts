import {Author} from "app/modelsInteface/author";
import {TagModel} from "app/components/Tags/TagModel/model";

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

