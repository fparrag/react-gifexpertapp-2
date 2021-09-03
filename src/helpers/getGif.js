

export const getGifs = async(Categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=URXNcPBvdZE7BwBosLgXYhA0qjrp8JL5&q=${ encodeURI(Categoria) }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return ({
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        })
    });
    
    return gifs;
};
