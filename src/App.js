import styled, { ThemeProvider } from "styled-components";
import { BasicTitle } from "./components/BasicTitle";
import Container from "./components/Container";
import { HipsterBtn, DefaultBtn } from "./components/DefaultBtn";
import { Button } from "@material-ui/core";
import ComplexTitle from "./components/ComplexTitle";
import AltTitle from "./components/AltTitle";
import { colors } from "./utils";
import Card from "./components/Card";
import { useState } from "react";
import { Loader } from "./components/Loader";

const BaseTheme = {
  color: "#222",
  background: "#fff",
};
const DarkTheme = {
  color: "#fff",
  background: "#222",
};

const ThemeBtn = styled(Button)`
  background-color: ${(props) => props.theme.background}!important;
  color: ${(props) => props.theme.color} !important;
  border: 1px solid ${(props) => props.theme.color}!important;
  margin: 1rem !important;
`;

const StyledBtn = styled(Button)`
  background-color: transparent !important;
  color: ${colors.secondary} !important;
  border: 1px solid ${colors.secondary} !important;
  margin: 1rem !important;
`;

const StyleContainer = styled(Container)`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  margin: 20px auto;
`;

function App() {
  const [baseTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!baseTheme);
  };

  return (
    <ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
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
        <StyledBtn
          href="https://mui.com/"
          target="_blank"
          variant="contained"
          color="primary"
        >
          Hello MUI
        </StyledBtn>
      </Container>

      <ComplexTitle title="more complex title" />
      <AltTitle title="alternative title" />
      <Card />

      <StyleContainer>
        <h3>Theme Example</h3>
        <ThemeBtn onClick={toggleTheme} variant="contained" color="primary">
          Toggle Me
        </ThemeBtn>
      </StyleContainer>

      <Container>
        <h3>Animations Example</h3>
        <Loader />
      </Container>

      <Container>
        <h3>AS Prop Example</h3>
        <HipsterBtn>Click Me</HipsterBtn>
        <HipsterBtn
          as="a"
          href="https://styled-components.com/"
          target="_blank"
        >
          Try Me
        </HipsterBtn>
      </Container>
    </ThemeProvider>
  );
}

export default App;
