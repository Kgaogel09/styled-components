import styled, { keyframes } from "styled-components";
import { colors } from "../utils";

const spinner = keyframes`
to{
   transform: rotate(360deg)
}`;

export const Loader = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: ${colors.secondary};
  animation: ${spinner} 0.6s linear infinite;
`;
