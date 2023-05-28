import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";

const RelatedProducts = ({ productid, categoryid }) => {
  const { data } = useFetch(
    "/api/products?populate=*&[filters][id][$ne]=" +
      productid +
      "&filters[categories][id]=" +
      categoryid +
      "&pagination[start]=0&pagination[limit]=4"
  );

  return (
    <div className="related-products">
      <Products headingText="Related Products" products={data} />
    </div>
  );
};

export default RelatedProducts;
