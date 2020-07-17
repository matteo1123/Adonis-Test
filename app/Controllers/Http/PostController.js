'use strict'
const Post = use('App/Models/Post')
const Database = use('Database')

class PostController {
    async getAll({response}) {
        let posts = await Database.select(['title', 'body'])
            .from('posts')
            console.log(posts)
        response.send(posts)
    }
}

module.exports = PostController
