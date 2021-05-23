require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { queryParser } = require('express-query-parser')

const { routes } = require('./server/routes/_index')

const app = express()
app.use(
  queryParser({
    parseNull: true,
    parseBoolean: true,
  })
)
const port = process.env.port
const host = process.env.host || localhost

// connect
async function start() {
  app.use(cors())
  try {
    await mongoose.connect(process.env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(port, host, () => {
      console.log(`Server running on localhost:${port}`)
    })
  } catch (e) {
    console.log('err: ' + e.message)
    process.exit(1)
  }
}
start().then()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// serves paths automatically, kinda cool
routes.forEach((item) => {
  app.use(`/api/${item}`, require(`./server/routes/${item}`))
})
