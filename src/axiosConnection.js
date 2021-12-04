import axios from "axios";

const AxiosConnection = axios.create({baseURL: 'https://pokeapi.co/api/v2/pokedex/'});

export default AxiosConnection;