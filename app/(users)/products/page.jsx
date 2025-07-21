import ProductList from "./ProductList";

const ProductsPage = async (props) => {
  const paramData = await props.searchParams;

  const category = paramData.category;
  const sortBy = paramData.sort;

  return (
    <div className="m-4">
      <h1 className="text-2xl">Products Page</h1>
      <div className="flex flex-col text-center">
        <div>
          <ProductList/>
        </div>
        <h2>
          You are viewing the Products
          {category && ` with Category: ${category}`}
          {sortBy && ` sorted by ${sortBy}`}
        </h2>
      </div>
    </div>
  );
};

export default ProductsPage;
