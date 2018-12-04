import {Author} from "app/models/author";

export interface Article {
    slug: string
    title: string
    description: string
    body: string
    tagList: string[]
    createAt: string
    updateAt: string
    favorited: boolean
    favoritesCount: number
    author: Author
}

