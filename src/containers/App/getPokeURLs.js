//Can change it to a Map method

export const createPokeURLs = (array) => {
    const arrayURL = [];
   
    const addURL = (value) => {
      var id = value;
      var url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      arrayURL.push(url);
      return arrayURL;
    }
    array.forEach(addURL);
    return arrayURL;
  }