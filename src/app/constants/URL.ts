export const API_URL = "https://conduit.productionready.io/api"

/*
{
  "user":{
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
 */
export const LOGIN_URI = "/users/login" // POST

/*
{
  "user":{
    "username": "Jacob",
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
 */
export const REGIST_URI = "/users" // POST

export const GET_CURRENT_USER = "/user"  // GET
/**
 {
  "user": {
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
    "username": "jake",
    "bio": "I work at statefarm",
    "image": null
  }
}
 */

/*
{
  "user":{
    "email": "jake@jake.jake",
    "bio": "I like to skateboard",
    "image": "https://i.stack.imgur.com/xHWG8.jpg"
  }
}
 */
export const UPDATE_USER = "/user" // PUT


export const GET_PROFILE = "/profiles/:username" // GET
/**
 {
  "profile": {
    "username": "jake",
    "bio": "I work at statefarm",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
    "following": false
  }
}
 */


export const FALLOW_USER = "/profiles/:username/follow" // POST

export const UNFLOW_USER = "/profiles/:username/follow" // DELETE

export const GET_ARTICLES = "/articles" // GET
/**
 {
  "articles":[{
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }, {
    "slug": "how-to-train-your-dragon-2",
    "title": "How to train your dragon 2",
    "description": "So toothless",
    "body": "It a dragon",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }],
  "articlesCount": 2
}
 */

/*
{
  "article": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": ["reactjs", "angularjs", "dragons"]
  }
}
 */
export const CREATE_ARTICLE = "/articles/:slug" // POST


/*
{
  "article": {
    "title": "Did you train your dragon?"
  }
}
 */
export const UPDATE_ARTICLE  = "/articles/:slug" // PUT

export const DELETE_ARTICLE = "/articles/:slug"  // DELETE

/*
{
  "comment": {
    "body": "His name was my name too."
  }
}
 */
export const ADD_COMMENT = "/articles/:slug/comments" // POST

export const GET_COMMENT = "/articles/:slug/comments" // GET
/**
 {
  "comments": [{
    "id": 1,
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:22:56.637Z",
    "body": "It takes a Jacobian",
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }]
}
 */


export const DELETE_COMMENT = "/articles/:slug/comments/:id" // DELETE

export const FAVORITE_ARTICLE = "/articles/:slug/favorite" // POST

export const UNFAVORITE_ARTICLE = "/articles/:slug/favorite" //DELETE

export const GET_TAG = "/tags" // GET
/**
 {
  "tags": [
    "reactjs",
    "angularjs"
  ]
}
 */
