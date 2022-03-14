import styled from "styled-components";

export const BasicTitle = styled.h2`
  text-transform: capitalize;
  /* color: ${(props) => props.green && "green"}; */
  color: ${({ special }) => (special ? "skyblue" : "green")};
`;
