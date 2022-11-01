import Services from '../../servises/data';
import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

    state = {
        heroes : [],
        loading:true,
        error:false,
        offset:219,
        extraLoading : false,
        heroEnded : false
    }
    componentDidMount(){
        this.getHeroesData();
    }
    newService = new Services();

    onError = ()=>{
        this.setState({
            error:true,
            loading:false
        })
    }

    getHeroesData = () =>{
        this.newService.getAllHeroes()
        .then(this.onHeroesLoaded)
        .catch(this.onError)
    }

    onHeroesLoaded = (heroes)=>{
        this.setState({
            heroes,
            loading:false
        })
    }
    onRequestMore = (offset)=>{
        this.onExtraLoading()
        this.newService.getAllHeroes(offset)
        .then(this.onMoreHeroesLoaded)
        .catch(this.onError)
    }
    onExtraLoading = ()=>{
        this.setState({
            extraLoading: true
        })
    }
    onMoreHeroesLoaded = (newHeroes)=>{
        let ended = false;
        if(newHeroes.length < 9){
            ended = true;
        }
        this.setState(({heroes,offset})=>({
            heroes : [...heroes, ...newHeroes],
            extraLoading : false,
            offset: offset + 9,
            heroEnded : ended
        }))
    }


    render(){
        const {heroes,loading,error,offset,heroEnded} = this.state;
        const loadingImg = loading ? <Spinner/> : null
        const errorImg = error ? <ErrorMessage/>:null
        return(
            <div className="char__list">
            <ul className="char__grid">
                {loadingImg}
                {errorImg}
                {heroes.map(({name,thumbnail,id})=>{
                    return(
                        <li className="char__item"
                        key = {id}
                        onClick = {()=> this.props.onGetHeroId(id)}>
                    <img src={thumbnail} alt="abyss"/>
                    <div className="char__name">{name}</div>
                </li>
                    )
                })}
            
            </ul>
            <button style={{display: heroEnded ? 'none' : 'block' }} onClick={()=>this.onRequestMore(offset)} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
        )
    }

}
export default CharList;