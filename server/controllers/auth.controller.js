const config = require('config');
const jwt = require('jsonwebtoken');
const {User} = require('../models/_index')

module.exports = {
    async login({body: {email, password}}, res) {
        try {
            const foundUser = await User.findOne({email});
            if (!foundUser) {
                return res.status(403).send({
                    message: "Died from Cringe!"
                });
            }
            // TODO encryption goes brrrrrrrr
            const isPasswordCorrect = foundUser.password === password;
            if (!isPasswordCorrect) {
                return res.status(403).send({
                    message: "Died from Cringe!"
                });
            }
            const accessToken = jwt.sign({
                _id: foundUser._id,
                email: foundUser.email,
            }, config.get("JWT_SECRET"))
            return res.status(200).send({
                accessToken,
                email: foundUser.email
            })
        } catch (e) {
            return res.status(403).send({
                message: "Died from Cringe!"
            });
        }
    }
}