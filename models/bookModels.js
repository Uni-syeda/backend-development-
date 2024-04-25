const mongoose = require("mongoose");

const { Schema } = mongoose;

const codesquadeComicsSchema = new Schema ({
    title: {
        type:String,
    }
})

const comics = mongoose.model("comics", codesquadComicsSchema);

module.exports = comics;