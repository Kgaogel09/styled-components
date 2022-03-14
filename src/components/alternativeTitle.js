import styled from "styled-components";

function AlternativeTitle({ title, className }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  );
}

const Wrapper = styled(AlternativeTitle)`
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

export default Wrapper;
