import {toJS} from 'mobx'
import {Article} from "app/models_interface/article";
import {Author} from "app/models_interface/author";

export class ArticleModel {
    readonly title: string
    readonly body: string
    readonly tagList: string[]
    readonly createAt: string
    readonly favorited: boolean
    readonly favoritesCount: number
    readonly author: Author

    constructor(title: string, body: string, tagList:string[], createAt: string, favorited: boolean, favoricesCount: number) {
        this.title = title
        this.body = body
        this.tagList = tagList
        this.createAt = createAt
        this.favorited = favorited
        this.favoritesCount = favoricesCount
    }

    toJS(): Article {
        return toJS(this)
    }

    static fromJS(vo: Article): ArticleModel {
        return new ArticleModel(vo.title, vo.body, vo.tagList, vo.createAt, vo.favorited, vo.favoritesCount)
    }

}