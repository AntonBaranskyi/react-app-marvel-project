import Services from '../../servises/data';
import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharList extends Component {

    state = {
        heroes : [],
        loading:true,
        error:false
    }
    componentDidMount(){
        this.getHeroesData();
    }
    newService = new Services();

    onError = ()=>{
        this.setState({
            error:true
        })
    }

    getHeroesData = () =>{
        this.newService.getAllHeroes().then(resp=>{
            this.setState({
                heroes:resp.slice(0,9),
                loading:!this.state.loading
            })
        }).catch(this.onError)
    }

    render(){
        const {heroes,loading,error} = this.state;
        const loadingImg = loading ? <Spinner/> : null
        const errorImg = error ? <ErrorMessage/>:null
        return(
            <div className="char__list">
            <ul className="char__grid">
                {loadingImg}
                {errorImg}
                {heroes.map(({name,thumbnail})=>{
                    return(
                        <li className="char__item">
                    <img src={thumbnail} alt="abyss"/>
                    <div className="char__name">{name}</div>
                </li>
                    )
                })}
            
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
        )
    }

}
export default CharList;