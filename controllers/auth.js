const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../services/user");

async function registerUser(req, res){
    const { email, password, firstName, lastName } = req.body;
    const result = await userService.getUserByEmail(email)

    if (result[0]) {
        return res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = {
        firstName,
        lastName,
        Email: email.toLowerCase(), // sanitize: convert email to lowercase
        role: "user",
    };

    console.log("encryptedPassword", encryptedPassword);

    const newUserIds = await userService.createUser({
        ...user,
        passwordHash: encryptedPassword,
    })

    const token = jwt.sign(
        { userId: user.id,
            Email: user.Email, },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );
    user.token = token;
    user.id = newUserIds[0];
        return res.status(200).send(user);

}

async function loginUser(req, res) {
    const {email, password} = req.body;
    const [user] = await userService.getUserByEmail(email);

    if (!user) {
        return res.status(409).send("User doesnt Exist. Please Sign up");
    }

    if (user && (await bcrypt.compare(password, user.passwordHash))) {
        // Create token
        const token = jwt.sign(
            {userId: user.id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        res.send({
            authToken: token,
        });
    }
}



    module.exports = {
        registerUser,
        loginUser,
    }
