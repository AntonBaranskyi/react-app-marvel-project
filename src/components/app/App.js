import MainPage from "../pages/MainPage";
import ComicsPages from "../pages/ComicsPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page404 from "../pages/404";
import SingleComicPage from "../pages/SingleComic";

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
            <Route path="*" element = {<Page404 />}/>
            <Route path="/comics/:comicId" element = {<SingleComicPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
