import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Products = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "This is my first book",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second book",
    description: "This is my second book",
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map(product => (
          <ProductItem
            key={product.key}
            title={product.title}
            id = {product.id}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
