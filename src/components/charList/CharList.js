import useServices from "../../servises/data";
import "./charList.scss";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

const CharList = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [offset, setOffset] = useState(219);
  const [extraLoading, setExtraLoading] = useState(false);
  const [heroEnded, setHeroEnded] = useState(false);

  useEffect(() => {
    getHeroesData();
  }, []);

  const {loading, error, getAllHeroes} = useServices();

  const getHeroesData = (offset, initial) => {
    getAllHeroes(offset).then(onHeroesLoaded)
  };

  const onHeroesLoaded = (heroes) => {
    setHeroes(heroes);
    
  };
 const onRequestMore = (offset) => {
    onExtraLoading();
    getAllHeroes(offset).then(onMoreHeroesLoaded)
  };
  const onExtraLoading = () => {
    setExtraLoading(true);
  };
  const onMoreHeroesLoaded = (newHeroes) => {
    let ended = newHeroes.length < 9;

    onExtraLoading();
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
