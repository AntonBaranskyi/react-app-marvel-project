import "./singleComicPage.scss";

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useServices from "../../servises/data";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import { Helmet } from "react-helmet";

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState([]);
  const { loading, error, getComics } = useServices();

  useEffect(() => {
    getComicData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comicId]);

  const onComicLoad = (comic) => {
    setComic(comic);
  };

  const getComicData = () => {
    getComics(comicId).then(onComicLoad);
  };

  const errorMsg = error ? <ErrorMessage /> : null;
  const loadingImg = loading ? <Spinner /> : null;
  const content = !(errorMsg || loadingImg) ? <View comic={comic} /> : null;
  return (
    <>
      {loadingImg}
      {errorMsg}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, thumbnail, price, pages } = comic;
  return (
    <div className="single-comic">
      <Helmet>
        <meta name={`${title} book`} content="Marvel comics information" />
        <title>{`${title} page of comic`}</title>
      </Helmet>
      <img src={thumbnail} alt="x-men" className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pages} pages</p>
        <p className="single-comic__descr">Language: en-us</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <a href="#" className="single-comic__back">
        <Link end to="/comics">
          Back to all
        </Link>
      </a>
    </div>
  );
};

export default SingleComicPage;
