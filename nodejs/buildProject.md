1. install express

````
const express = require('express');
const app = express();
````

2. install body parser 

> body parser is a middleware which is maintained by the express team to extracts the entire body portion of an incoming request stream and exposes it on req.body.

````
const bodyParser = require('body-parser');
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
````

3. config the static file

> create a public file at first

````
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
````

1. set the  rendering engine 

````
app.set('view engine', 'ejs');
app.set('views', 'views');
````

5.set the router 

- create the rouoter folder
- write the router file 
  
  admin.js  ,this is a admin related router file , we can see that , we wrote the all admin related route here .

````
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('add product');
});

router.get('/edit-product', (req, res, next) => {
    res.send('edit product');
});

module.exports = router;

````

   then , we can require the admin related file in the app.js file 

   ````
    const adminRoutes = require('./router/admin');
    app.use('/admin',adminRoutes);
   ````

#### or 
 
  we can handle the route by creating controller .
  
  in the controller folder , admin file 

  ````
    exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
       pageTitle: 'Add Product',
       path: '/admin/add-product',
       editing: false
     });
    };

  ````

  then , we can controller with the route by controller file .

  ````
    const express = require('express');
    const router = express.Router();
    const adminController = require('../controllers/admin');
    router.get('/add-product', adminController.getAddProduct);
  ````


### 6.connect to the database

````
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://Abdulla:<password>5@cluster0.oi88h.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

````


### 7. active the database before server 

app.js file

````
// put the database in the util folder database.js file
const mongoConnect = require('./util/database').mongoConnect;
mongoConnect(() => {
  app.listen(3005);
});
````

### 8.create the models

in this project ,there are two collections , one is the users , the other is product . We created the product class in the product.js file , then we defined some methods to create , save ,delete ,update products .

models/product.js 

````
const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        console.log('Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;

````


### 9.handle the database in the controller 

here is the example of handling the products collection in the admin controller file .

````
const Product = require('../models/product');
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(
    title,
    price,
    description,
    imageUrl,
    null,
    req.user._id
  );

  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/admin/products');
    })
    .catch(err => {
      console.log(err);
    });
    
};
````












   


