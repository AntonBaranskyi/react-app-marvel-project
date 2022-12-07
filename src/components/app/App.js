import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from "../../resources/img/vision.png";
import { useState } from "react";
import ComicsBanner from "../comicsBanner/comicsBanner";
import ComicsPage from "../comicsPage/comicsPage";

const App = ()=>{

    const [heroId , setHeroId] = useState(null);

    const onGetHeroId = (id) => {
        setHeroId(id);
    };

        return (
            <div className="app">
                <AppHeader />
                {/* <main>
                    <RandomChar />
                    <div className="char__content">
                        <CharList onGetHeroId={onGetHeroId} />
                        <CharInfo heroId={heroId} />
                    </div>
                    <img
                        className="bg-decoration"
                        src={decoration}
                        alt="vision"
                    />
                </main> */}
                <ComicsBanner/>
                <ComicsPage/>
            </div>
        );
    }

export default App;
