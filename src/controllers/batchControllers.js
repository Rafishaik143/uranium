const batchModel = require("../models/batchModel")
const devloperMOdel = require("../models/developerModel")

const creatBatch = async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({ message: batchCreated })

}

const creatDevloper = async function (req, res) {
    let devloper = req.body
    let devloperCreated = await devloperMOdel.create(devloper)
    res.send({ message: devloperCreated })

}

const scholorship = async function (req, res) {
    let eligable = await devloperMOdel.find({ gender: "female", percentage: { $gte: 70 } }).populate('batch')
    res.send({ message: eligable })

}

const getDevlopers = async function (req, res) {
    let percent = req.query.percentage
    let program = req.query.program
    let a = await batchModel.find({ name: program }).select({ _id: 1 })

    const data = await devloperMOdel.find(
        { $and:[{batch: {$in: a}} , {percentage: {$gte: percent}} ]}
    ).populate('batch')
    res.send({message:  data})

}

module.exports.creatBatch = creatBatch
module.exports.creatDevloper = creatDevloper
module.exports.scholorship = scholorship
module.exports.getDevlopers = getDevlopers