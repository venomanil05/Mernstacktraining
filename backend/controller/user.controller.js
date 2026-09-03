import User from '../model/user.js';
import createToken from '../utils/createToken.js';

const signup = async (req, res) => {
    const { fullname, email, password, isAdmin } = req.body;

    console.log(email)

    const user = await User.findOne({ email });
    if (user) return res.status(400).send({ error: "User already exists" });

    const newUser = await User.create({ fullname, email, password, isAdmin });

    res.send({
        message: "User created successfully",
        user: {
            fullname: newUser.fullname,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        },
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).send({ error: "User not registered!" });
    }

    if (await user.comparePassword(password)) {
        createToken(user._id, res);

        res.send({
            message: "login success!",
            user: {
                fullname: user.fullname,
                email: user.email,
                isAdmin: user.isAdmin,
            },
        });
    } else {
        res.status(400).send({ error: "password not matched" });
    }
};

const logout = async (req, res) => {
    res.clearCookie("jwt"); 
    res.send({mesage:"Logout Success!"});
    };

export { signup, login, logout };
