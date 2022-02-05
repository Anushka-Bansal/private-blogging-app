const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");
const jwtSecret = "asdfrtuyxsde4677dff788";

const userControls = {
    register: async (req, res) => {
        let fname = req.body.fname;
        let lname = req.body.lname;
        let email = req.body.email;
        let password = req.body.password;
        let contact = req.body.contact;
        const passwordHash = await bcrypt.hash(password, 10);

        let ins = new userModel({
            fname: fname,
            lname: lname,
            email: email,
            password: passwordHash,
            contact: contact,
        });
        console.log(ins);
        await ins.save((err) => {
            if (err) {
                res.json({ err: "User already Registered" });
            } else {
                res.json({ msg: "Registered" });
            }
        });
    },

    login: async (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        const user = await userModel.findOne({ email: email });
        console.log(user);
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            console.log(isMatch);
            console.log(req.body.password);

            if (email === user.email && isMatch) {
                let payload = {
                    oid: email,
                };
                const token = jwt.sign(payload, jwtSecret, {
                    expiresIn: 1060000,
                });
                res.json({
                    msg: "Login successful",
                    token: token,
                    user: user._id,
                });
            } else {
                res.json({ err: "please enter correct password" });
            }
        } else {
            res.json({ err: "invalid email" });
        }
    },
};
module.exports = userControls;
