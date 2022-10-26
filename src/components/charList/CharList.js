import Services from '../../servises/data';
import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import { Component } from 'react';

class CharList extends Component {

    state = {
        name:null,
        thumbnail:null
    }   
    componentDidMount(){
        this.getDataHeroes();
    }
    heroService = new Services();
    getDataHeroes = ()=>{
        this.heroService.getAllHeroes()
        .then(resp=>{
           let neededAnsw = resp.slice(0,9);
           console.log(neededAnsw);
            neededAnsw.map(item=>{
                this.setState({
                    name:item.name,
                    thumbnail:item.thumbnail
                })
            })
        })
    }
    render(){
        const {name,thumbnail} = this.state;
    return (
        <div className="char__list">
            <ul className="char__grid">
                <li className="char__item">
                    <img src={thumbnail} alt="abyss"/>
                    <div className="char__name">{name}</div>
                </li>
                <li className="char__item char__item_selected">
                    <img src={thumbnail} alt="abyss"/>
                    <div className="char__name">{name}</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
                <li className="char__item">
                    <img src={abyss} alt="abyss"/>
                    <div className="char__name">Abyss</div>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}
}

export default CharList;