import { Component } from 'react';
import Services from '../../servises/data';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton'

import './charInfo.scss';
import thor from '../../resources/img/thor.jpeg';

class CharInfo extends Component {
    state = {
        hero:null,
        loading:false,
        error:false
    }

    marvelServises = new Services();

    componentDidMount(){
        this.onGetHeroData();
    }

    onGetHeroData = ()=>{
        const {heroId} = this.props;
        if(!heroId){
            return;
        }
        this.marvelServises.getHero(heroId)
        .then(this.onHeroLoaded)
        .catch(this.onError)
    }
    onHeroLoaded = ({hero})=>{
        this.setState({hero});
        this.setState({
            loading:false
        })
    }
    onError = ()=>{
        this.setState({
            error:true,
            loading:false
        })
    }

    render(){
    const {hero,loading,error} = this.state;
    const loadingImg = loading ? <Spinner/> : null;
    const errorImg = error ? <ErrorMessage/> : null;
    const skelet = loading || error || hero ? null : <Skeleton/>
    const content = !(loading || error || !hero) ? <Viev hero={hero}/>: null
    return (
        <div className="char__info">
            {skelet}
            {loadingImg}
            {errorImg}
            {content}
        </div>
    )
}
}

const Viev = ({hero})=>{
    const {name,thumbnail,description,wiki,homepage} = hero;
    return(
        <>
        <div className="char__basics">
                <img src={thumbnail} alt={name}/>
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
            <div className="char__descr">
               {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                <li className="char__comics-item">
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className="char__comics-item">
                    Alpha Flight (1983) #50
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #503
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) #504
                </li>
                <li className="char__comics-item">
                    AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Vengeance (2011) #4
                </li>
                <li className="char__comics-item">
                    Avengers (1963) #1
                </li>
                <li className="char__comics-item">
                    Avengers (1996) #1
                </li>
            </ul>
            </>
    )
}

export default CharInfo;