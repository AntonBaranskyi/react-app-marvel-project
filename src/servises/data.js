class Services {
    __apiKey = "apikey=c334abaf7a79a7cc717a34fe3aa984af";
    __apiData = "https://gateway.marvel.com:443/v1/public/";

    getAllData = async (url) => {
        let result = await fetch(url);

        if (!result.ok) {
            throw new Error(
                `Could not fetch this ${url}, status: ${result.status}`
            );
        }

        return await result.json();
    };

    getAllHeroes = async () => {
        const res = await this.getAllData(
            `${this.__apiData}characters?${this.__apiKey}`
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
}

export default Services;
