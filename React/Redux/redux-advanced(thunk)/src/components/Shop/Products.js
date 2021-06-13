import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux'

const Products = (props) => {
  const items = useSelector(state => state.cartSliceReducer.items);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          items.map((item) => {
            return (
              <ProductItem
                key={item.itemId}
                id={item.itemId}
                price={item.price}
                title={item.title}
                description='This is a good product - amazing!'
              />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
