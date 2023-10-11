
const express = require('express')
const app = express()
const port = 3000

// Import the env files
require(`dotenv`).config();

const bodyParser = require('body-parser')

app.use(bodyParser.json())

// routes
require(`./src/routes/api`)(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
