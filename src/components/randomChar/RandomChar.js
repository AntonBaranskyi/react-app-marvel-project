import { Component } from 'react';
import Services from '../../servises/data';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';


class RandomChar extends Component {
    constructor(props){
        super(props);
        this.updateHero();
    }
    state = {
        name: null,
        description: null,
        thumbnail : null, // image
        homepage:null,
        wiki:null
    }
    marvelServises = new Services();
    

    updateHero = ()=>{
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
         this.marvelServises
        .getHero(id)
        .then(resp=>{
             let hero = resp.data.results[0]
            this.setState({
                name: hero.name,
                description: hero?.description || 'message',
                thumbnail: hero.thumbnail.path + '.' + hero.thumbnail.extension,
                homepage : hero.urls[0].url,
                wiki: hero.urls[1].url
            })
        })
    }
    render(){
        const {name, description, thumbnail, homepage, wiki} = this.state;
    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                        {description}
                    </p>
                    <div className="randomchar__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href= {wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}
}

export default RandomChar;
