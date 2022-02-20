import styled from "styled-components";
import BasicTitle from "./components/BasicTitle";
import Container from "./components/Container";
import DefaultBtn from "./components/DefaultBtn";
import { HipsterBtn } from "./components/DefaultBtn";
import { Button } from "@material-ui/core";

const StyledBtn = styled(Button)`
  background-color: transparent !important;
  color: #3f51b5 !important;
  border: 1px solid 3f51b5 !important;
  margin: 1rem !important;
`;

function App() {
  return (
    <>
      <Container>
        <BasicTitle special>Styled Components</BasicTitle>
        <BasicTitle>Styled Components</BasicTitle>
        <DefaultBtn>Click Me</DefaultBtn>
        <HipsterBtn>Hello</HipsterBtn>
      </Container>

      <Container>
        <h2>Extend material-ui button</h2>
        <Button variant="contained" color="primary">
          Hello MUI
        </Button>
        <StyledBtn variant="contained" color="primary">
          Hello MUI
        </StyledBtn>
      </Container>
    </>
  );
}

export default App;
