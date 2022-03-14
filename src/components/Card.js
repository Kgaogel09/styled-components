import styled from "styled-components";

function Card() {
  return (
    <CardWrapper>
      <img
        src="https://cdn.pixabay.com/photo/2016/11/23/14/29/living-room-1853203_960_720.jpg"
        alt="glass"
      />
      <footer>
        <h4>product name</h4>
        <p>$16</p>
      </footer>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  background-color: var(--white);
  border-radius: 0.25rem;
  max-width: 300px;
  margin: 0 auto;
  width: 90vw;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    h4 {
      text-transform: capitalize;
    }
    p {
      color: var(--secondary);
      font-weight: 500;
    }
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0px 3px 3px rgb(0 0 0 / 12%);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export default Card;
