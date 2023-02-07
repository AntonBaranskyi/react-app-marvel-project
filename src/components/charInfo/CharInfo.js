import "./charInfo.scss";
import { useState, useEffect } from "react";
import useServices from "../../servises/data";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

const CharInfo = (props) => {
  const [hero, setHero] = useState(null);

  const { loading, error, getHero } = useServices();

  useEffect(() => {
    onHeroDataUpdate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onHeroDataUpdate();
  }, [props.heroId]);

  const onHeroDataUpdate = () => {
    if (!props.heroId) {
      return;
    }

    getHero(props.heroId).then(updateHero);
  };
  const updateHero = (hero) => {
    setHero(hero);
  };

  return (
    <div className="char__info">
      {!(hero || loading || error) && <Skeleton />}
      {loading && <Spinner />}
      {error && <ErrorMessage />}
      {!(loading || error || !hero) && <View hero={hero} />}
    </div>
  );
};

const View = ({ hero }) => {
  let i = 0;
  const { name, thumbnail, description, homepage, wiki, comics } = hero;
  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt="abyss" />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length === 0 ? "Could not find any comics for this hero" : null}
        {comics &&
          comics.map(({ name }) => {
            return (
              <li className="char__comics-item" key={i++}>
                {name}
              </li>
            );
          })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  heroId: PropTypes.number,
};

export default CharInfo;
