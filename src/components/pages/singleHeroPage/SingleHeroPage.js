import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useServices from "../../../servises/data";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../../spinner/Spinner";
import ComicsBanner from "../../comicsBanner/comicsBanner";
import {
  HeroDescription,
  HeroImg,
  HeroName,
  LinkToMainPage,
  MainWrapper,
} from "./SingleHeroPageStyled";

const SingleComicPage = () => {
  const { heroId } = useParams();
  const [hero, setHero] = useState([]);
  const { loading, error, getHero } = useServices();

  useEffect(() => {
    getHerocData();
  }, [heroId]);

  const onHeroLoad = (answ) => {
    setHero(answ);
  };

  const getHerocData = () => {
    getHero(heroId).then(onHeroLoad);
  };

  const errorMsg = error ? <ErrorMessage /> : null;
  const loadingImg = loading ? <Spinner /> : null;
  const content = !(errorMsg || loadingImg) ? <View hero={hero} /> : null;
  return (
    <>
      <ComicsBanner />
      {loadingImg}
      {errorMsg}
      {content}
    </>
  );
};

const View = ({ hero }) => {
  return (
    <MainWrapper>
      <div>
        <HeroImg src={hero.thumbnail} />
      </div>

      <div style={{ marginLeft: "60px" }}>
        <HeroName>{hero.name}</HeroName>
        <HeroDescription>{hero.description}</HeroDescription>

        <LinkToMainPage>
          <Link end to="/">
            Back to main page
          </Link>
        </LinkToMainPage>
      </div>
    </MainWrapper>
  );
};

export default SingleComicPage;
