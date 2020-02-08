const client = require('contentful').createClient({
    space: '91kc645hwry0',
    accessToken: 'g7tWmZftDhqC6dZPu4yWbMpYRdVn2g4hdZ-ZVA4oheY'
})

const getBlogPosts = () => client.getEntries().then(response => response.items)

const getSinglePost = slug => {
    client
    .getEntries({
        'fields.Slug' : slug,
        content_type : 'blogPost'
    })
    .then(response => response.items)
}
export {getBlogPosts, getSinglePost}