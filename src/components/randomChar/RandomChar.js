import { useState, useEffect } from "react";
import Services from "../../servises/data";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import mjolnir from "../../resources/img/mjolnir.png";
import "./randomChar.scss";

const RandomChar = () => {
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const marvelServises = new Services();

  useEffect(() => {
    updateHero();
  }, []);
  const onUpdate = () => {
    updateHero();
    setLoading(true);
  };

  const onHeroLoaded = (hero) => {
    setHero(hero);
    setLoading((loading) => (loading = false));
  };
  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const updateHero = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    marvelServises.getHero(id).then(onHeroLoaded).catch(onError);
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
