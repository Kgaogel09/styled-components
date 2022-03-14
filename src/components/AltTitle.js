import styled from "styled-components";
import { colors } from "../utils";

function AltTitle({ title }) {
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
    background: ${colors.secondary};
    margin: 20px auto;
  }
`;

export default AltTitle;
