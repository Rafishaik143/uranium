let addPlayers = function (req, res) {
    let a = req.body.name
    console.log(a)

    let palyers = [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": ["swimming"]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": ["soccer"]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": ["soccer"]
        },
    ]



    return res.send({ msg: " players list ", data: palyers })
}

module.exports.addPlayers = addPlayers


let newPlayers = function (req, res) {
    let a = req.body
    console.log(a)

    let palyers = [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": ["swimming"]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": ["soccer"]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": ["soccer"]
        },
    ]

    palyers.map(p => {
        if (p.name == a.name) {
            return res.send({ msg: " palyer alreday exsist" })

        }
    })
    palyers.push(a)
   
    res.send({ msg: " new  players list ", data: palyers })
}

module.exports.newPlayers = newPlayers