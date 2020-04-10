const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true }
    },
    { timestamps: true },
)
//mongodb+srv://jackson:jackson1@cluster0-y0rqv.mongodb.net/projectsDatabase?retryWrites=true&w=majority
//heroku config:set PROD_MONGODB="mongodb+srv://jackson:jackson1@cluster0-y0rqv.mongodb.net/projectsDatabase?retryWrites=true&w=majority"
module.exports = mongoose.model('users', User)