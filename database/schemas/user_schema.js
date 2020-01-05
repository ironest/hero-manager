const { Schema } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        bcrypt: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    gold: {
        type: Number,
        required: true,
        default: 100
    }
});

UserSchema.plugin(require("mongoose-bcrypt"));

module.exports = UserSchema;
