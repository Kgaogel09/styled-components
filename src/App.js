import styled from "styled-components";

const BasicTitle = styled.h2`
  text-align: center;
  text-transform: capitalize;
  color: green;
`;

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle>Styled Components</BasicTitle>
      <button className="btn">Click Me</button>
    </div>
  );
}

export default App;
