import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import SingleHeroPage from '../pages/singleHeroPage/SingleHeroPage';

// Dynamic imports
const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPages = lazy(() => import("../pages/ComicsPages"));
const SingleComicPage = lazy(() => import("../pages/SingleComic"));

const App = () => {
  return (
    <Router>
      {/*Весь контент треба поміщати в Router*/}
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            {/*Обов'язково при React.lazy, сторінка заглушка*/}
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPages />} />
              <Route path="*" element={<Page404 />} />
              <Route path="/comics/:comicId" element={<SingleComicPage />} />
              <Route path="/:heroId" element={<SingleHeroPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
