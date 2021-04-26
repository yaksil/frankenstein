const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const {routes} = require('./server/routes/_index')

const app = express();
const port = config.get('port') || 3000;

// connect
async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(port, () => {
            console.log(`Server running on ${port}`);
        })
    } catch (e) {
        console.log("err: " + e.message);
        process.exit(1);
    }
}
start().then();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets paths automatically, kinda cool
routes.forEach(item => {
    app.use(`/api/${item}`, require(`./server/routes/${item}`));
})


