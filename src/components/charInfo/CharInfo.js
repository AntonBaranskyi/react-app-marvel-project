import "./charInfo.scss";
import { Component } from "react";
import Services from "../../servises/data";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import PropTypes from "prop-types";

class CharInfo extends Component {
  state = {
    hero: null,
    loading: false,
    error: false,
  };
  componentDidMount() {
    this.onHeroDataUpdate();
  }

  componentDidUpdate(prevProps) {
    // Типове використання (не забудьте порівняти пропси):
    if (this.props.heroId !== prevProps.heroId) {
      this.onHeroDataUpdate();
    }
  }

  marvelService = new Services();
  onHeroDataUpdate = () => {
    const { heroId } = this.props;
    if (!heroId) {
      return;
    }
    this.onLoading();
    this.marvelService
      .getHero(heroId)
      .then(this.updateHero)
      .catch(this.onError);
  };
  updateHero = (hero) => {
    console.log(hero);
    this.setState({
      hero,
      loading: false,
    });
  };
  onLoading = () => {
    this.setState({
      loading: true,
    });
  };
  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };
  render() {
    const { hero, loading, error } = this.state;

    return (
      <div className="char__info">
        {!(hero || loading || error) && <Skeleton />}
        {loading && <Spinner />}
        {error && <ErrorMessage />}
        {!(loading || error || !hero) && <View hero={hero} />}
      </div>
    );
  }
}

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
        {comics.length == 0 ? "Could not find any comics for this hero" : null}
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
