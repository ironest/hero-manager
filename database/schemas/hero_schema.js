const { Schema } = require("mongoose");

const HeroSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    class: {
        type: String,
        enum: ['warrior', 'mage', 'archer'],
        required: true,
    },
    race: {
        type: String,
        required: true,
        enum: ['human', 'elf', 'dwarf']
    },
    level: {
        type: Number,
        required: true,
        default: 1
    },
    xp: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    status : {
        type: String,
        required: true,
        enum: ['Available', 'In Mission', 'Dead']
    }
});

HeroSchema.plugin(require("mongoose-bcrypt"));

module.exports = HeroSchema;
