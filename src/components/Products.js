import styled from "styled-components";
import ComplexTitle from "./ComplexTitle";
import Product from "./Product";

const product = [
  { id: 1, name: "chair", price: 30 },
  { id: 2, name: "bed", price: 150 },
  { id: 3, name: "couch", price: 300 },
];

function Products() {
  return (
    <ProductsWrapper>
      <ComplexTitle title="All Products" />
      {product.map((ele) => {
        return <Product {...ele} key={ele.id} />;
      })}
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.section``;

export default Products;
