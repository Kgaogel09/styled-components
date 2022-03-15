import styled, { css } from "styled-components";
import { colors } from "../utils";

const fruits = ["orange", "banana", "peach", "apple"];

const List = () => {
  return (
    <div>
      <h2>Basic List example</h2>
      <Items>
        {fruits.map((item, index) => {
          return (
            <Item key={index} odd={(index + 1) % 2 !== 0}>
              {item}
            </Item>
          );
        })}
      </Items>
    </div>
  );
};

const Item = styled.li`
  list-style-type: none;
  padding: 1rem;
  width: 100%;
  ${({ odd }) => {
    return odd
      ? css`
          color: #fff;
          background: ${colors.secondary};
        `
      : css`
          color: #222;
        `;
  }};
`;

const Items = styled.ul`
  padding-left: 0;
`;

export default List;
