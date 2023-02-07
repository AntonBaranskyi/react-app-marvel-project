import { useState, useEffect } from "react";
import useServices from "../../servises/data";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import mjolnir from "../../resources/img/mjolnir.png";
import "./randomChar.scss";

const RandomChar = () => {
  const [hero, setHero] = useState({});
  const { loading, error, getHero, clearError } = useServices();
  useEffect(() => {
    updateHero();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onUpdate = () => {
    updateHero();
  };

  const onHeroLoaded = (hero) => {
    setHero(hero);
  };

  const updateHero = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getHero(id).then(onHeroLoaded);
  };

  const errorMsg = error ? <ErrorMessage /> : null;
  const loadingImg = loading ? <Spinner /> : null;
  const content = !(errorMsg || loadingImg) ? <StaticPart hero={hero} /> : null;
  return (
    <div className="randomchar">
      {errorMsg}
      {loadingImg}
      {content}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button onClick={onUpdate} className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const StaticPart = ({ hero }) => {
  const { name, description, thumbnail, homepage, wiki } = hero;
  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className="randomchar__img" />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
