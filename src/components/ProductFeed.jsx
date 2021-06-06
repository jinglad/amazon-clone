import Product from "./Product";

const ProductFeed = (props) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {props.products.slice(0, 4).map((product, i) => (
        <Product key={i} product={product} />
      ))}

      <img
        src="https://links.papareact.com/dyz"
        alt=""
        className="md:col-span-full"
      />

      <div className="md:col-span-2">
        {props.products.slice(4, 5).map((product, i) => (
          <Product key={i} product={product} />
        ))}
      </div>

      {props.products.slice(5, props.products.length).map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
