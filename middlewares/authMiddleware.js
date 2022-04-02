const jwt = require("jsonwebtoken");
const userService = require("../services/user");

async function authMiddleware(req, res, next){
    const token = req.headers.authorization;
    const userId = jwt.decode(token);
    console.log("token", token);
    const user = userService.getUserById(userId);
    req.user = user;
    next();
}

module.exports = authMiddleware;

// header Authorization
// TODO: create auth middleware
// https://expressjs.com/ru/guide/using-middleware.html
// check Промежуточный обработчик уровня маршрутизатора
// ты должен в миддлваре достать айдишник из токена
// токен должен лежать в req.headers.authToken
// он там появится когда пользователь туда положит
// посмотри как в постмане добваить токен в хедеры
// после того как достанешь айдишник из токена по этому айди достань пользователя из бд
// если нет токена верни ошибку
// если нет пользователя верни другую ошибку
// эту мидлвару используй для того что бы защитить следующие роуты
/*
* userRouter.post("/user", createUser);

userRouter.get("/user", getUsers);

userRouter.delete("/user/:id", deleteUser);

userRouter.get("/user/:id", getUserById);

userRouter.put("/user/:id", updateUser);
* */

// И да в той статье это тоже описано
// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/