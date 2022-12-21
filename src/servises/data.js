import { useHttp } from "../hooks/useHttp";

const useServices = () => {
  const { loading, error, request, clearError } = useHttp();
  const __apiKey = "apikey=c334abaf7a79a7cc717a34fe3aa984af";
  const __apiData = "https://gateway.marvel.com:443/v1/public/";
  const _apiOffsetHero = 210;
  const _apiOffsetComics = 210;

  const getAllHeroes = async (offset = _apiOffsetHero) => {
    const res = await request(
      `${__apiData}characters?limit=9&offset=${offset}&${__apiKey}`
    );
    return res.data.results.map(_transformHero);
  };

  const getHero = async (id) => {
    const res = await request(`${__apiData}characters/${id}?${__apiKey}`);
    return  _transformHero(res.data.results[0]);
  };

  const getNumHero = async (num) => {
    const res = await request(
      `${__apiData}characters?limit=${num}&${__apiKey}`
    );
    return await res.data.results[0];
  };

  const getComicsList = async (offset = _apiOffsetComics) => {
    const res = await request(
      `${__apiData}comics?offset=${offset}&${__apiKey}`
    );
    return res.data.results.map(_trasfromComics);
  };

  const _transformHero = (res) => {
    // трансформували данні
    return {
      name: res.name,
      description: res.description
        ? `${res.description.slice(0, 200)}...`
        : "Could not found description for this hero",
      thumbnail: res.thumbnail.path + "." + res.thumbnail.extension,
      homepage: res.urls[0].url,
      wiki: res.urls[1].url,
      id: res.id,
      comics: res.comics.items,
    };
  };

  const _trasfromComics = (res) => {
    return {
      id: res.id,
      title: res.title,
      price: res.prices.price == undefined ? "9.99$" : res.prices.price,
      thumbnail: res.thumbnail.path + "." + res.thumbnail.extension,
    };
  };
  return { getAllHeroes, getHero, getComicsList, getNumHero, loading, error, clearError };
};

export default useServices;
