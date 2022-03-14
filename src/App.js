import styled from "styled-components";
import { BasicTitle } from "./components/BasicTitle";
import Container from "./components/Container";
import { HipsterBtn, DefaultBtn } from "./components/DefaultBtn";
import { Button } from "@material-ui/core";
import ComplexTitle from "./components/ComplexTitle";
import AltTitle from "./components/AltTitle";
import { colors } from "./utils";
import Card from "./components/Card";

const StyledBtn = styled(Button)`
  background-color: transparent !important;
  color: ${colors.secondary} !important;
  border: 1px solid ${colors.secondary} !important;
  margin: 1rem !important;
`;

function App() {
  return (
    <>
      <Container>
        <BasicTitle special>styled components</BasicTitle>
        <BasicTitle>styled components</BasicTitle>
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

      <ComplexTitle title="more complex title" />
      <AltTitle title="alternative title" />
      <Card />
    </>
  );
}

export default App;
