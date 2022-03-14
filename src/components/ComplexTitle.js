import styled from "styled-components";

function ComplexTitle({ title }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 4rem;
    height: 0.1rem;
    background-color: #645cff;
    margin: 0 auto;
  }
`;

export default ComplexTitle;
