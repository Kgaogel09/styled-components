import styled from "styled-components";

function Product({ name, price }) {
  return (
    <ProductWrapper price={price}>
      <h4>{name}</h4>
      <p>R{price}</p>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.article`
  width: 300px;
  background: #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  p {
    color: ${({ price }) => {
      if (price < 100) {
        return "green";
      }
      if (price >= 300) {
        return "red";
      } else {
        return "#222";
      }
    }};
  }
`;
export default Product;
