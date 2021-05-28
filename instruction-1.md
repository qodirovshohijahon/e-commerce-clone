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
mongoose
  .connect( 
    `mongodb://${config.MONGO_USER}:${config.MONGO_PASS}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Database connected:  `);
  });
```

#### 11. MVC pattern

- create folders
    - mkdir controller
    - mkdir router
    - mkdir model

router/index.js
```js
const express = require('express')
const router = express.Router();

router.post('signin', (req, res) => {

})

router.post('signup', (req, res) => {
    
})

module.exports = router;
```


**remove these lines from ./index.js**

```js
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello from express"
    })
    console.log(res)
})

app.post('/data', (req, res) => {
    res.status(200).json({
        message: req.body
    })
})
```
**add this line ./index.js**

```js
app.use('/api', userRoutes)
```
**create schema**

touch ./models/user.js
create schema
```js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 10
    },

    userName: {
        type: String,
        required: true,
        index: true,
        trim: true,
        lowercase: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    hash_password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },

    contactNumber: {
        type: String
    },
    profilePicture: {
        type: String
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)


- install bcrypt

`npm install --save bcrypt`

mkdir conroller/user.js


controller/user.js

```js

const User = require("../models/user");
const router = require("../router");

```
move methods from router to this file

router/index.js

```js

const { signup, getAllUsers, usersList, login } = require("../controller/user");
router.post('/signup', signup)
router.get('/users', getAllUsers)


```


#### 10. Explain .gitignore & remove hidden files

    - git rm -r --cached ./node_modules/
    - git rm -r --cached .env
