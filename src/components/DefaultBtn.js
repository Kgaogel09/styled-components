import styled from "styled-components";

const DefaultBtn = styled.button`
  background: rgb(84, 178, 209);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.25rem;
  display: block;
  width: 100px;
  margin: 1rem auto;
  :hover {
    background: transparent;
    color: rgb(84, 178, 209);
    border: 1px solid rgb(84, 178, 209);
  }
`;

export default DefaultBtn;

export const HipsterBtn = styled(DefaultBtn)`
  background: transparent;
  color: rgb(84, 178, 209);
  border: 1px solid rgb(84, 178, 209);
  :hover {
    background: rgb(84, 178, 209);
    color: #fff;
  }
`;
