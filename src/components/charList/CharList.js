import Services from "../../servises/data";
import "./charList.scss";
import abyss from "../../resources/img/abyss.jpg";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

const CharList = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(219);
  const [extraLoading, setExtraLoading] = useState(false);
  const [heroEnded, setHeroEnded] = useState(false);

  useEffect(() => {
    getHeroesData();
  }, []);

  const newService = new Services();

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const getHeroesData = () => {
    newService.getAllHeroes().then(onHeroesLoaded).catch(onError);
  };

  const onHeroesLoaded = (heroes) => {
    setHeroes(heroes);
    setLoading(false);
  };
 const onRequestMore = (offset) => {
    onExtraLoading();
    newService.getAllHeroes(offset).then(onMoreHeroesLoaded).catch(onError);
  };
  const onExtraLoading = () => {
    setExtraLoading(true);
  };
  const onMoreHeroesLoaded = (newHeroes) => {
    let ended = newHeroes.length < 9;

    setHeroes((heroes) => [...heroes, ...newHeroes]);
    setExtraLoading(false);
    setOffset((offset) => offset + 9);
    setHeroEnded(ended);
  };

  const loadingImg = loading ? <Spinner /> : null;
  const errorImg = error ? <ErrorMessage /> : null;
  return (
    <div className="char__list">
      <ul className="char__grid">
        {loadingImg}
        {errorImg}
        {heroes.map(({ name, thumbnail, id }) => {
          return (
            <li
              className="char__item"
              key={id}
              onClick={() => props.onGetHeroId(id)}
            >
              <img src={thumbnail} alt="abyss" />
              <div className="char__name">{name}</div>
            </li>
          );
        })}
      </ul>
      <button
        style={{ display: heroEnded ? "none" : "block" }}
        onClick={() => onRequestMore(offset)}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onGetHeroId: PropTypes.func,
};
export default CharList;
