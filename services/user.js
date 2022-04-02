const knex = require("../dataBase");

function createUser(user) {
    console.log("new user", user);
    return knex("user").insert(user);
}
function updateUser(userId, newUser){
    return knex("user")
        .where({id: userId})
        .update({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email

        })

}
function getUser(){
    return knex.select().table("user")
}

function deleteUser(userId){
    return knex("user")
        .where({id: userId})
        .del()
}

function getUserById(userId){
    return knex.select().where({id: userId}).table("user")
}

function getUserByEmail(email) {
    return knex("user").where({Email: email});
}

module.exports = {
    createUser,
    updateUser,
    getUser,
    deleteUser,
    getUserById,
    getUserByEmail,
}