import Services from "../../servises/data";
import "./charList.scss";
import abyss from "../../resources/img/abyss.jpg";
import { Component } from "react";

class CharList extends Component {
    state = {
        heros: [],
    };
    componentDidMount() {
        this.getDataHeroes();
    }
    heroService = new Services();
    getDataHeroes = () => {
        this.heroService.getAllHeroes().then((resp) => {
            this.setState({ heros: resp.slice(0, 9) });
        });
    };
    render() {
        const { heros } = this.state;
        return (
            <div className="char__list">
                <ul className="char__grid">
                    {heros &&
                        heros.map(({ name, thumbnail }) => (
                            <li className="char__item">
                                <img src={thumbnail} alt="abyss" />
                                <div className="char__name">{name}</div>
                            </li>
                        ))}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

export default CharList;
