// src/services/freeToGameService.js
import axios from 'axios';

// Proxy CORS público que funciona em produção
const PROXY_URL = 'https://api.allorigins.win/raw?url=';
const BASE_URL = 'https://www.freetogame.com/api';

export const getGames = async () => {
    try {
        const response = await axios.get(`${PROXY_URL}${encodeURIComponent(`${BASE_URL}/games`)}`);

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

// Mapeamento de tempo de sessão
const sessionLengthMap = {
    'MMORPG': 60, 'Shooter': 20, 'Strategy': 40, 'MOBA': 30,
    'Racing': 10, 'Sports': 15, 'Fighting': 10, 'Battle Royale': 25,
    'Action': 15, 'Adventure': 20, 'Action RPG': 45, 'Card Game': 5,
    'Fantasy': 30, 'Sci-Fi': 25, 'Open World': 50, 'Survival': 30,
    'Pixel': 10, 'VR': 15, 'MMO': 60, 'Social': 15, 'Mobile': 10
};