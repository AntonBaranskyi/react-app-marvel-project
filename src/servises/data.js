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

    getAllHeroes = ()=>{
        return this.getAllData(`${this.__apiData}characters?${this.__apiKey}`);
    }

    getHero = (id)=>{
        return this.getAllData(`${this.__apiData}characters/${id}?${this.__apiKey}`);
    }
}

export default Services;