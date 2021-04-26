const boom = require('@hapi/boom')

/**
 * generic controller
 * бля бояринъ меня расхуярил
 * get +
 * getALl +
 * create - (500) or (400)? what the fuck
 * update +
 * delete +/- functional on server but 500 on response --fixed
 */

const genController = (model) => ({
    async getById (req, res) {
        try {
            const item = await model.findById(req.params.id)
            return res.status(200).json(item)
        } catch (e) {
            return res.status(400).send(boom.boomify(e))
        }
    },
    async getAll(req, res) {
        try {
            const items = await model.find()
            return res.status(200).json(items)
        } catch (e) {
           return res.status(400).send(boom.boomify(e))
        }
    },
    async create(req, res) {
        try {
            const item = new model(req.body);
            const newItem = await item.save();
            return res.status(200).send(newItem);
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }
    },
    async updateById(req, res) {
        try {
            await model.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data =>{
                res.json(data).status(201)
            })
        } catch (e) {
            return res.status(400).send(boom.boomify(e))
        }
    },
    async delete(req, res) {
        try {
            await model.findByIdAndDelete(req.params.id);
            return res.status(200).send({ status: "OK", message: "Продукт удален" });
        } catch (err) {
            return res.status(400).send(boom.boomify(err));
        }

    }
})

module.exports = genController;
