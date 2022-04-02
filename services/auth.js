const knex = require("../dataBase");

// function registerUser(){
//
//     // if (!(Email && password && firstName && lastName)) {
//     //     res.status(400).send("All input is required");
//     // }
//     // const oldUser = knex("user").findOne({ email });
//     // TODO: проверка повторения юзера
//     // if (oldUser) {
//     //     return res.status(409).send("User Already Exist. Please Login");
//     // }
//     encryptedPassword =  bcrypt.hash(password, 10);
// }

module.exports= {
    registerUser,
    loginUser,

}