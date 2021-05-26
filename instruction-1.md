#### 1. Create git repo

#### 2. Initializa npm

#### 3. Explain & install packages

- [x] express
- [x] express-validator
- [x] mongoose

#### 4. Create main folder for source codes

mkdir src

**Coding part - 1**

**index.js**

```js
const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
```

#### 5. Explain & Install dotenv


```js
const env = require('dotenv')

env.config()

let config = process.env

app.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`)
})
```

**End of part - 1**


**part - 2 exress req, ress**


```js
app.get('/news', (req, res) => {
    res.status(200).json({
        message: "Hello from Muzaffar"
    })
})
```


#### 6. Install nodemon

in package.json
```js
nodemon node ./src/index.js
```

#### 7. Explain api client (Postman, etc)

#### 8. Explain & Install bodyparser

```js
const bodyparser = require('body-parser')
app.use(bodyparser())


app.post('/data', (req, res) => {
    res.status(200).json({
        message: req.body
    })
})

```
Check via postman

#### 9. Connect Mongo Cluster from Local
- mongodb.com
- shared cluster (free)
- choose datacentr
- Check Network access
- Add Current IP address | 0.0.0.0/0
- Clusters => Connect => Create db & user & passw
- Choose connection method => Connect your application
- Get address from Cluster
https://www.npmjs.com/package/mongoose

**write in .env file**
 - MONGO_USER
 - MONGO_PASS
 - MONGO_DB

```js
mongoose.connect(
    //"mongodb://localhost:27017/test",
    `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASS}@cluster/${config.MONGO_DB}?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Database connected: mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASS}@cluster/${config.MONGO_DB}?retryWrites=true&w=majority`)
    });
```


#### 10. Explain .gitignore & remove hidden files
