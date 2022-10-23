import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

import Services from './servises/data';

let marvelServises = new Services();
marvelServises.getAllHeroes().then(resp=>resp.data.results.forEach(item=>console.log(item.id,item.name)));
marvelServises.getHero(1011334).then(resp=>resp.data.results.forEach(item=>console.log(item.name)));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

