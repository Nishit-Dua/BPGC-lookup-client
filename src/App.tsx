import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Footer, Navbar } from "./components";

import { Depriciationpage, Errorpage, Reasonpage, Rollpage } from "./pages";

function App() {
  return (
    <StyledApp>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Depriciationpage} />
          <Route path="/source" exact component={Rollpage} />
          <Route path="/reason" exact component={Reasonpage} />
          <Route path="*" component={Errorpage} />
        </Switch>
        <Footer />
      </Router>
    </StyledApp>
  );
}

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  height: 100vh;
  width: 100vw;
`;

export default App;
