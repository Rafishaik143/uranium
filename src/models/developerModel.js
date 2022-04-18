const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId

const devloperSchema = new mongoose.Schema({
    name: String,
    gender: {
       type: String,
       enum : ["male", "female"]
    },
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "batch"

    }


}, { timestamps: true });


module.exports = mongoose.model('devloper', devloperSchema)
