import styled from "styled-components";

const BasicTitle = styled.h2`
  text-transform: capitalize;
  /* color: ${(props) => props.special && "green"}; */
  color: ${({ special }) => (special ? "skyblue" : "green")};
`;

export default BasicTitle;
