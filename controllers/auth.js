const User = require('../models/user')

exports.signup = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    if(!email || !password){
        return res.status(422).send({ error: 'You must provide email and password'})
    }
    // see if a user with email exists
    User.findOne({email: email}, (err, existingUser) => {
        if(err) { return next(err)}
        // if user exist return an Error
        if(existingUser) {
            return res.status(422).send({error: 'Email is in use'})
        }

        // else create and save user record
        const user = new User({
            email,
            password
        })

        user.save((err) => {
            if(err) {return next(err)}
        })

        // respond to request
        res.json({success: true})
    })

}
