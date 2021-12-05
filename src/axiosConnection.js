import axios from "axios";

export const AxiosConnection = axios.create({baseURL: 'https://pokeapi.co/api/v2/pokedex/'});
export const AxiosSinglePokemonData = axios.create({baseURL:'https://pokeapi.co/api/v2/pokemon-species/'})

// export default AxiosConnection;