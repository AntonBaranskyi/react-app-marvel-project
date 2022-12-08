import MainPage from "../pages/MainPage";
import ComicsPages from "../pages/ComicsPages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

const App = () => {
  return (
    <Router>
      {/*Весь контент треба поміщати в Router*/}
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/">
              {" "}
              {/*Зрівнює посилання по символу*/}
              <MainPage />
            </Route>
            <Route exact path="/comics">
              <ComicsPages />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
