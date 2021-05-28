const express = require('express')
const app = express()
const env = require('dotenv')
const bodyParser = require("body-parser");


app.use(bodyParser());
env.config()
let config = process.env


mongoose.connect(
    "mongodb://localhost:27017/admin",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Database connected: mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASS}@cluster/${config.MONGO_DB}?retryWrites=true&w=majority`)
    });



app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello from Muzaffar"
    })
})

app.post('/data', (req, res) => {
    res.status(200).json({
        message: req.body
    })
})

app.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`)
})