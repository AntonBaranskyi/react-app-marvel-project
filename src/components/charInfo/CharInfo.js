import './charInfo.scss';
import { Component } from 'react';
import Services from '../../servises/data';
import Skeleton from '../skeleton/Skeleton'
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharInfo extends Component {
    state = {
        hero:null,
        loading:false,
        error:false
    }
    componentDidMount (){
        this.onHeroDataUpdate();
    }

    componentDidUpdate(prevProps) {
        // Типове використання (не забудьте порівняти пропси):
        if (this.props.heroId !== prevProps.heroId) {
          this.onHeroDataUpdate()
        }
      }

    marvelService = new Services();
    onHeroDataUpdate = ()=>{
        const {heroId} = this.props;
        if(!heroId){
            return;
        }
        this.onLoading();
        this.marvelService.getHero(heroId)
        .then(this.updateHero)
        .catch(this.onError)
    }
    updateHero = (hero)=>{
        console.log(hero)
        this.setState({
            hero,
            loading:false
        })
    }
    onLoading = ()=>{
        this.setState({
            loading:true
        })
    }
    onError = ()=>{
        this.setState({
            loading:false,
            error:true
        })
    }
    render(){
        const {hero,loading,error} = this.state;
        const skelet = hero || loading || error ? null : <Skeleton/>
        const loadingImg = loading ? <Spinner/> : null;
        const errorImg = error ? <ErrorMessage/> : null;
        const content = !(loading || error || !hero) ?   <View hero = {hero}/> : null
    

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

const View = ({hero})=>{
    let i = 0;
    const {name,thumbnail,description,homepage,wiki,comics} = hero;
    return(
        <>
        <div className="char__basics">
                <img src={thumbnail} alt="abyss"/>
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

            {comics&&
                comics.map(({name})=>{
                return(
                    <li className="char__comics-item"
                    key={i++}>
                    {name}
                </li>
                )
            })}
            </ul>
            </>
    )
}

export default CharInfo;