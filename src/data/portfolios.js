import banda from "../img/portImages/banda.png";
import gameOfLife from "../img/portImages/gameOfLife.png";
import mentorme from "../img/portImages/mentorme.png";
import omdb from "../img/portImages/omdb.png";
import pokemonApp from "../img/portImages/pokemonApp.png";
import weatherApp from "../img/portImages/weatherApp.jpg";
import bbsearch from "../img/portImages/bbsearch.jpg";
import firegram from "../img/portImages/firegram.jpg";

const portfolios = [
  {
    id: 1,
    category: "CSS",
    image: banda,
    link1: "https://github.com/AleTartaglia/ProyectoBanda",
    title: "Proyecto Banda",
    text: "Creado solo con HTML y CSS.",
  },
  {
    id: 2,
    category: "JavaScript",
    image: gameOfLife,
    link1: "https://github.com/AleTartaglia/gameoflife",
    title: "Conway's Game of Life",
    text: "Juego de la vida, hecho en JavaScript",
  },
  {
    id: 3,
    category: "Node",
    image: pokemonApp,
    link1: "https://github.com/AleTartaglia/22-PokemonApp",
    title: "Pokemon App",
    text: "Uso de MongoDB, Node(express)",
  },
  {
    id: 4,
    category: "React JS",
    image: omdb,
    link1: "https://github.com/AleTartaglia/omdb",
    title: "Buscador de películas",
    text: "Uso de React,React-Redux,Express,PostgreSQL",
  },
  {
    id: 5,
    category: "React JS",
    image: mentorme,
    link1: "https://github.com/AleTartaglia/mentorme-globant",
    title: "Mentor ME",
    text: "MVP para Globant. Uso de React,MongoDB-Atlas",
  },
  {
    id: 6,
    category: "PWA",
    image: weatherApp,
    link1: "https://github.com/AleTartaglia/weatherApp",
    title: "Weather APP",
    text: "Una simple pero práctica PWA",
  },
  {
    id: 7,
    category: "React JS",
    image: bbsearch,
    link1: "https://github.com/AleTartaglia/breakingbadwiki",
    title: "Breaking bad Wiki",
    text: "Un buscador de personajes de Breaking Bad",
  },
  {
    id: 8,
    category: "Hooks",
    image: firegram,
    link1: "https://github.com/AleTartaglia/firegram",
    title: "Firegram",
    text: "Photo Gallery con firebase y custom Hooks",
  },
];

export default portfolios;
