const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth")

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(userRouter);

app.use(authRouter);


app.listen(PORT, function () {
    console.log(`Server ${PORT} `);
});

