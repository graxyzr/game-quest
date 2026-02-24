// src/services/freeToGameService.js
import axios from 'axios';

// AllOrigins - outro proxy confiável
const PROXY_URL = 'https://api.allorigins.win/raw?url=';

export const getGames = async () => {
    try {
        const response = await axios.get(`${PROXY_URL}${encodeURIComponent('https://www.freetogame.com/api/games')}`);

        // AllOrigins já retorna os dados diretamente
        return response.data.map(game => ({
            id: game.id,
            title: game.title,
            coverUrl: game.thumbnail,
            timeToBeat: 20,
            category: game.genre,
            sessionLength: sessionLengthMap[game.genre] || 25,
            platform: game.platform,
            publisher: game.publisher,
            developer: game.developer,
            releaseDate: game.release_date,
            description: game.short_description,
            owned: true
        }));
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        return [];
    }
};