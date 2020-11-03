const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Question = new Schema(
    {
        name: { type: String},
        question: { type: [String]},
    },
);

const Questions = mongoose.model("questions",Question)
//module.exports = mongoose.model("questions", Question)
module.exports = Questions;