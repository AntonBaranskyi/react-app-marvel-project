import { useState, useEffect } from "react";
import Services from "../../servises/data";
import Spinner from "../spinner/Spinner";
import {
  Button,
  ComcisItemDiv,
  ComicsImg,
  ComicsPrice,
  ExtraLoading,
  TextButton,
  TitleComics,
  WrapperComics,
} from "./comicsPageStyled";
import "../../style/button.scss";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ComicsPage = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(false);
  const [offset, setOffset] = useState(210);
  const [extraLoading, setExtraLoading] = useState(false);

  const MarvelService = new Services();
  useEffect(() => {
    getListOfComics();
  }, []);

  const getListOfComics = () => {
    MarvelService.getComicsList().then(loadComics).catch(loadError);
  };
  const loadComics = (res) => {
    setComics(res.slice(0,8));
    setLoading(false);
  };
  const loadError = () => {
    setEror(true);
    setLoading(false);
  };
  const onRequestMore = (offset)=>{
    setExtraLoading(true);
    MarvelService.getComicsList(offset).then(loadMoreComics).catch(loadError);
  }

  const loadMoreComics =(newComics)=>{
    setComics((comics)=> [...comics, ...newComics]);
    setOffset(offset=> offset + 8);
    setExtraLoading(false);
  }
  const errorMessage = error ? <ErrorMessage /> : null;
  const loadingImg = loading ? <Spinner /> : null;

  return (
    <WrapperComics>
      {errorMessage}
      {loadingImg}
      {comics &&
        comics.map((item) => {
          return (
            <ComcisItemDiv key={item.id}>
                <ComicsImg src={item.thumbnail} />
              <TitleComics>{item.title}</TitleComics>
              <ComicsPrice>{item.price}</ComicsPrice>
            </ComcisItemDiv>
          );
        })}
        <div>
      <Button>
        <TextButton onClick={()=>onRequestMore(offset)}>Load more</TextButton>
      </Button>
      {extraLoading ? <ExtraLoading >Loading...</ExtraLoading> : null}
      </div>
    </WrapperComics>
  );
};

export default ComicsPage;
