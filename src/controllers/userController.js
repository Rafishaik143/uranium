const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let booksdData= await UserModel.create(data)
    res.send({msg: booksdData})
}

const getBookslist= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBookslist= getBookslist