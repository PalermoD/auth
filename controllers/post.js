const Post = require('../models/post')


exports.post = (req, res, next) => {
    const title = req.body.title,
    const discription = req.body.discription,
    const video = req.body.video

    const post = new Post({
        title,
        discription,
        video
    })

    post.save(err => {
        if(err) { return next(err)}
        res.send(post)
    })

}
