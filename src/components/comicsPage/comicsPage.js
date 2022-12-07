import { useState, useEffect } from "react";
import Services from "../../servises/data";
import Spinner from "../spinner/Spinner";
import {
  Button,
  ComcisItemDiv,
  ComicsImg,
  ComicsItem,
  ComicsPrice,
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

  const MarvelService = new Services();
  useEffect(() => {
    getListOfComics();
  }, []);

  const getListOfComics = () => {
    MarvelService.getComicsList().then(loadComics).catch(loadError);
  };
  const loadComics = (res) => {
    setComics(res.slice(0, 8));
    setLoading(false);
  };
  const loadError = () => {
    setEror(true);
    setLoading(false);
  };

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
              <ComicsItem>
                <ComicsImg src={item.thumbnail} />
              </ComicsItem>
              <TitleComics>{item.title}</TitleComics>
              <ComicsPrice>{item.price}</ComicsPrice>
            </ComcisItemDiv>
          );
        })}
      <Button>
        <TextButton>Load more</TextButton>
      </Button>
    </WrapperComics>
  );
};

export default ComicsPage;
