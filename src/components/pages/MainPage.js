import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from "../../resources/img/vision.png";

const MainPage = () => {
  const [heroId, setHeroId] = useState(null);

  const onGetHeroId = (id) => {
    setHeroId(id);
  };

  return (
    <>
      <RandomChar />
      <div className="char__content">
        <CharList onGetHeroId={onGetHeroId} />
        <CharInfo heroId={heroId} />
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
