import axios from "axios";
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
const released = `${currentYear}-${currentMonth}-${currentDay}`;

const gameData = {
  allGames: async (pageNumber) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/lists/main?key=15c214371ccd435bb19af0fe3e07b094&ordering=relevance&discover=true&dates=${released}&page=${pageNumber}&page_size=40`
    );
    return response;
  },
  singleGame: async (gameId) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId}?key=15c214371ccd435bb19af0fe3e07b094`
    );
    return response;
  },
  gameTrailers: async (gameId) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${gameId}/movies?key=15c214371ccd435bb19af0fe3e07b094`
    );
    return response;
  },
};

export default gameData;
