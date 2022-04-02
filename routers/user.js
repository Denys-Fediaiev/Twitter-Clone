const {Router} = require("express");
const {
    createUser,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
} = require("../controllers/user");

const userRouter = Router();
const authMiddleware = require("../middlewares/authMiddleware");

userRouter.post("/user", authMiddleware, createUser);

userRouter.get("/user", authMiddleware, getUsers);

userRouter.delete("/user/:id", authMiddleware, deleteUser);

userRouter.get("/user/:id", authMiddleware, getUserById);

userRouter.put("/user/:id", authMiddleware, updateUser);

module.exports = userRouter;