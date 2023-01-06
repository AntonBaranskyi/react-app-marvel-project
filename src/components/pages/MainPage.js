import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from "../../resources/img/vision.png";
import SearchCharForm from "../searchCharForm/SearchCharForm";

import { Helmet } from "react-helmet";

const MainPage = () => {
  const [heroId, setHeroId] = useState(null);

  const onGetHeroId = (id) => {
    setHeroId(id);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information" />
        <title>Marvel information</title>
      </Helmet>
      <RandomChar />
      <div className="char__content">
        <CharList onGetHeroId={onGetHeroId} />
        <div>
          <CharInfo heroId={heroId} />
          <SearchCharForm />
        </div>
      </div>

      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
