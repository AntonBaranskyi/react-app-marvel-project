import MainPage from "../pages/MainPage";
import ComicsPages from "../pages/ComicsPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

const App = () => {
  return (
    <Router>
      {/*Весь контент треба поміщати в Router*/}
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} /> 
            <Route path="/comics" element={<ComicsPages />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


