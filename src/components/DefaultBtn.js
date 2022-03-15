import styled, { css } from "styled-components";

export const DefaultBtn = styled.button`
  background: rgb(84, 178, 209);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  display: block;
  max-width: 100px;
  width: 100%;
  margin: 1rem auto;
  :hover {
    background: transparent;
    color: rgb(84, 178, 209);
    border: 1px solid rgb(84, 178, 209);
  }
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `}
`;

export const HipsterBtn = styled(DefaultBtn)`
  background: transparent;
  color: rgb(84, 178, 209);
  border: 1px solid rgb(84, 178, 209);
  :hover {
    background: rgb(84, 178, 209);
    color: #fff;
  }

  text-decoration: none;
  font-size: 1rem;
  text-align: center;
`;
