const name = "  functionup"

const tm = function () {
    
    console.log(name.trim())
}

const uppareCase = function () {
    const upper = name.toUpperCase()
    console.log(upper)
}

const lowerCase = function () {
    const lower = name.toLowerCase()
    console.log(lower)
}

module.exports = { tm, uppareCase, lowerCase }