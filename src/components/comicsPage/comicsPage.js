import { useState, useEffect } from "react";
import useServices from "../../servises/data";
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
import { Link } from "react-router-dom";

const ComicsPage = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(210);
  const [extraLoading, setExtraLoading] = useState(false);

  const { loading, error, getComicsList } = useServices();

  useEffect(() => {
    getListOfComics();
  }, []);

  const getListOfComics = () => {
    getComicsList().then(loadComics);
  };
  const loadComics = (res) => {
    setComics(res.slice(0, 8));
  };

  const onRequestMore = (offset) => {
    setExtraLoading(true);
    getComicsList(offset).then(loadMoreComics);
  };

  const loadMoreComics = (newComics) => {
    setComics((comics) => [...comics, ...newComics]);
    setOffset((offset) => offset + 8);
    setExtraLoading(false);
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
              <Link to={`/comics/${item.id}`}>
                <ComicsImg src={item.thumbnail} />
                <TitleComics>{item.title}</TitleComics>
                <ComicsPrice>{item.price}</ComicsPrice>
              </Link>
            </ComcisItemDiv>
          );
        })}
      <div>
        <Button>
          <TextButton onClick={() => onRequestMore(offset)}>
            Load more
          </TextButton>
        </Button>
        {extraLoading ? <ExtraLoading>Loading...</ExtraLoading> : null}
      </div>
    </WrapperComics>
  );
};

export default ComicsPage;
