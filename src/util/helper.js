const printDate = function () {
    const today = new Date()
    console.log(" To day date is"+" "+ today.getDate())
}

const printMonth = function () {
    const today = new Date()
    console.log(" persent month" + " " +today.getMonth())
}
const getbatchInfo = function (){
    console.log("uranium, W3D3, the topic for today is Nodejs module system")
}

module.exports = {printDate,printMonth,getbatchInfo}