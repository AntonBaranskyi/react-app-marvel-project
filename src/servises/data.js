class Services {
    __apiKey = 'apikey=c334abaf7a79a7cc717a34fe3aa984af';
    __apiData = 'https://gateway.marvel.com:443/v1/public/';

    getAllData = async (url)=>{
        let result = await fetch(url);

        if(!result.ok){
            throw new Error(`Could not fetch this ${url}, status: ${result.status}`);
        }

        return await result.json();
    }

    getAllHeroes = async ()=>{
        const res =  await this.getAllData(`${this.__apiData}characters?${this.__apiKey}`);
        return res.data.results.map(this._transformHero)
    }

    getHero = async (id)=>{
        const  res = await this.getAllData(`${this.__apiData}characters/${id}?${this.__apiKey}`);
        return this._transformHero(res);
    }

    _transformHero = (res)=>{ // трансформували данні 
        let hero = res.data.results[0];
        return {
            name: hero.name,
            description: hero.description ? `${hero.description.slice(0,200)}...` : 'Could not found description for this hero',
            thumbnail: hero.thumbnail.path + '.' + hero.thumbnail.extension,
            homepage : hero.urls[0].url,
            wiki: hero.urls[1].url
        }
    }
}

export default Services;