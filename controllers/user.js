const userService = require("../services/user");

 function createUser(req, res){
     //const user = req.user
     userService.createUser(req.body)
         .then(result => {
             res.send({
                 success: true,
                 userId: result[0],
             });
         });
}
function updateUser(req,res) {
    const userId = req.params.id;
    const newUser = req.body;
    userService.updateUser(userId, newUser)
        .then(result => {
            // TODO: посмотреть что находится в объекте result и сформировать объект для res.send
            res.send({
                success: true,
                userId: result[0],
            });
        });
}

function getUsers(req, res){
    userService.getUser();
}

function getUserById(req,res) {
     const userId = req.params.id;
     userService.getUserById(userId)
     .then(result => {

        res.send({
            success: true,
            userId: result[0],
        });
    });
}
function deleteUser(req, res){
     const userId = req.params.id;
     userService.deleteUser(userId)
    res.send({succes: true})
}

//

// function updateUser(req, res){
//      const index = users.findIndex(function (user){
//          return user.id == req.params.id
//      })

    // users[index] = {
    //      ...users[index],
    //     ...req.body,
    // };
    //
    // if (req.body.firstName) {
    //     users[index].firstName = req.body.firstName;
    // }
    // if (req.body.lastName) {
    //     users[index].lastName = req.body.lastName;
    // }
    // if (req.body.email) {
    //     users[index].email = req.body.email;
    // }

   // res.send(users[index])


module.exports = {
     createUser,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
 };
