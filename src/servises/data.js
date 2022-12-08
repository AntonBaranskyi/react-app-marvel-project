class Services {
  __apiKey = "apikey=c334abaf7a79a7cc717a34fe3aa984af";
  __apiData = "https://gateway.marvel.com:443/v1/public/";
  _apiOffsetHero = 210;
  _apiOffsetComics = 210;

  getAllData = async (url) => {
    let result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not fetch this ${url}, status: ${result.status}`);
    }

    return await result.json();
  };

  getAllHeroes = async (offset = this._apiOffsetHero) => {
    const res = await this.getAllData(
      `${this.__apiData}characters?limit=9&offset=${offset}&${this.__apiKey}`
    );
    return res.data.results.map(this._transformHero);
  };

  getHero = async (id) => {
    const res = await this.getAllData(
      `${this.__apiData}characters/${id}?${this.__apiKey}`
    );
    return this._transformHero(res.data.results[0]);
  };

  getNumHero = async (num) => {
    const res = await this.getAllData(
      `${this.__apiData}characters?limit=${num}&${this.__apiKey}`
    );
    return await res.data.results[0];
  };

  getComicsList = async (offset = this._apiOffsetComics) => {
    const res = await this.getAllData(
      `${this.__apiData}comics?offset=${offset}&${this.__apiKey}`
    );
    return res.data.results.map(this._trasfromComics);
  };

  _transformHero = (res) => {
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

  _trasfromComics = (res) => {
    return {
      id: res.id,
      title: res.title,
      price: res.prices.price == undefined ? "9.99$" : res.prices.price,
      thumbnail: res.thumbnail.path + "." + res.thumbnail.extension,
    };
  };
}

export default Services;
