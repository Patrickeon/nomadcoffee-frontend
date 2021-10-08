import { useReactiveVar } from "@apollo/client";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { isLoggedInvar, darkModeVar } from "./apollo";
import { darkTheme, lightTheme, GlobalStyles } from "./styles";
import Home from "./screen/Home";
import Login from "./screen/Login";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInvar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
