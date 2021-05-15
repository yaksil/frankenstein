const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { queryParser } = require('express-query-parser')

const {routes} = require('./server/routes/_index')

const app = express();
app.use(
    queryParser({
        parseNull: true,
        parseBoolean: true
    })
)
const port = config.get('port') || 4545;

// connect
async function start() {
   app.use(cors());
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


