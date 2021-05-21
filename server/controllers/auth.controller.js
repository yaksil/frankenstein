const config = require('config');
const jwt = require('jsonwebtoken');
const {User, Token} = require('../models/_index')

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
            }, config.get("JWT_SECRET"), {
                expiresIn: '30d'
            })

            const refreshToken = jwt.sign({
                _id: foundUser._id,
                email: foundUser.email,
            }, config.get("JWT_SECRET_REFRESH"))

            const foundToken = await Token.findOne({
                user_id: foundUser._id
            })

            if (foundToken) {
                await Token.findByIdAndUpdate(foundToken._id, { token: refreshToken })
                return res.status(200).send({
                    accessToken,
                    refreshToken,
                    email: foundUser.email,
                })
            }


            const item = new Token({token: refreshToken, user_id: foundUser._id});
            await item.save();

            return res.status(200).send({
                accessToken,
                refreshToken,
                email: foundUser.email
            })
        } catch (e) {
            return res.status(403).send({
                message: "Died from Cringe!"
            });
        }
    },
    async refreshMe({body: {refreshToken}}, res) {
        // checks token in request
        if (!refreshToken) {
            return res.status(403).send({
                message: "Denied!"
            })
        }
        // checks token in database
        const currentToken = await Token.find({token: refreshToken})
        if (!currentToken) {
            return res.status(403).send({
                message: "Denied!"
            })
        }
        // token verification -- analogue to middleware check
        jwt.verify(refreshToken, config.get("JWT_SECRET_REFRESH"), (err, user) => {
            if (err) {
                return res.status(403).send({
                    message: "Denied!"
                })
            }
            const accessToken = jwt.sign({
                _id: user._id,
                email: user.email,
            }, config.get("JWT_SECRET"), {
                expiresIn: '1m'
            })
            res.status(200).send({
                accessToken,
                email: user.email
            })
        })
    },

    async logout({body: {refreshToken}}, res) {
        const foundToken = await Token.findOne({token: refreshToken})

        if (!foundToken) {
            return res.status(403).send({
                message: "Not Authorized!!!!"
            })
        }

        await Token.findByIdAndDelete(foundToken._id)

        return res.status(200).send({
            message: "Logged out!!!"
        })
    },

}