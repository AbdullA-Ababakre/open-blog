routing is the mechanism by which requests(as specificed by a URL and HTTP method) are routed to th ecode that handles them.

## a small demo folder archetucture


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9476baa4b4e24d4abd21cc2807797ace~tplv-k3u1fbpfcp-watermark.image?)


### app.js

````
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));


// put all the home related routes in a route file
const homeRoutes = require('./routes/home');
// put all the users related routes in a route file
const userRoutes = require('./routes/users');

app.use('/home', homeRoutes);
app.use('/users', userRoutes)

app.listen(3003);


````

### /routes/home.js

````
var express = require('express')
const path = require('path');

var router = express.Router();
const rootDir = require('../util/path')


router.get('/home', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})


module.exports = router;

````

### /routes/users.js

````
var express = require('express')
const path = require('path');

var router = express.Router();
const rootDir = require('../util/path')


router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'users.html'));
})




module.exports = router;

````