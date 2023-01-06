import ComicsBanner from "../comicsBanner/comicsBanner";
import ComicsPage from "../comicsPage/comicsPage";

import { Helmet } from "react-helmet";

const ComicsPages = () => {
  return (
    <>
    <Helmet>
        <meta name="description" content="Marvel comics" />
        <title>Marvel comics</title>
      </Helmet>
      <ComicsBanner />
      <ComicsPage />
    </>
  );
};

export default ComicsPages;
