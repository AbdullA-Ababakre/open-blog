## adding dynamic routes

### add query by get method

```
<a href="/products/<%= product.id  %>" class="btn">Details</a>
```

通过 ejs 来拼接一个 product.id 的 query,then show it in the url

#### get query

router file

```
router.get('/products/:productId',shopController.getProduct);
```

controller file

extract the data on req.params

```
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    })
  })
}
```

#### optional query params

Optional query parameters can also be passed (?param=value&b=2) and extracted as (req.query.myParam)

### add query by post method

```
<form action="/cart" method="post">
  <button class="btn">Add to Cart</button>
  <input type="hidden" name="productId" value="<%= product.id  %>" />
</form>
```

```
router.post('/cart', shopController.postCart);
```

the param is in the post request body ,then we can get the query in the post request req.body

```
exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
}
```
