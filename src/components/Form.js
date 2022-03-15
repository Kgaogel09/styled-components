import styled, { css } from "styled-components/macro";
import { colors } from "../utils";

const Form = () => {
  return (
    <div>
      <h2>Form Setup</h2>
      <Button type="button">Click me</Button>
      <FormWrapper>
        <h2>Form</h2>
        <BasicInput type="text" />
        <BasicInput type="email" placeholder="Enter email" />
        <Button type="submit">Submit</Button>
      </FormWrapper>
    </div>
  );
};

const FormWrapper = styled.form`
  width: 300px;
  background: #fff;
  padding: 2rem;
  margin-top: 1rem;
`;

const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "Please enter value",
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const Button = styled.button`
  background: ${colors.secondary};
  border: none;
  color: #fff;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;

export default Form;
