// src/services/freeToGameService.js
import axios from 'axios';

// Mapeamento de tempo de sessão por gênero
const sessionLengthMap = {
    'MMORPG': 60, 'Shooter': 20, 'Strategy': 40, 'MOBA': 30,
    'Racing': 10, 'Sports': 15, 'Fighting': 10, 'Battle Royale': 25,
    'Action': 15, 'Adventure': 20, 'Action RPG': 45, 'Card Game': 5,
    'Fantasy': 30, 'Sci-Fi': 25, 'Open World': 50, 'Survival': 30,
    'Pixel': 10, 'VR': 15, 'MMO': 60, 'Social': 15, 'Mobile': 10,
    'Strategy RPG': 50, 'Tactical': 40, 'Horror': 20, 'Sandbox': 45,
    'Arcade': 10, 'Simulation': 35, 'Puzzle': 10, 'Board Games': 30
};

const timeToBeatMap = {
    'MMORPG': 100, 'Shooter': 15, 'Strategy': 30, 'MOBA': 50,
    'Racing': 10, 'Sports': 20, 'Fighting': 8, 'Battle Royale': 25,
    'Action': 12, 'Adventure': 15, 'Action RPG': 40, 'Card Game': 5,
    'Fantasy': 25, 'Sci-Fi': 20, 'Open World': 45, 'Survival': 35,
    'Pixel': 8, 'VR': 10, 'MMO': 80, 'Social': 5, 'Mobile': 8,
    'Strategy RPG': 60, 'Tactical': 35, 'Horror': 10, 'Sandbox': 50,
    'Arcade': 5, 'Simulation': 40, 'Puzzle': 8, 'Board Games': 20
};

// Agora chama o proxy local da Vercel
const API_URL = '/api/proxy'; // URL relativa funciona em produção e dev

export const getGames = async () => {
    try {
        console.log('Buscando jogos via proxy...');
        const response = await axios.get(API_URL);

        console.log(`Recebidos ${response.data.length} jogos`);

        return response.data.map(game => ({
            id: game.id,
            title: game.title,
            coverUrl: game.thumbnail,
            timeToBeat: timeToBeatMap[game.genre] || 20,
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
        // Fallback para dados locais em caso de erro
        return getFallbackGames();
    }
};

// Função de fallback com dados locais
const getFallbackGames = () => {
    console.log('Usando dados de fallback');
    return [
        { id: 1, title: 'Hades', category: 'Roguelike', coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg', timeToBeat: 22, sessionLength: 30, platform: 'PC', owned: true },
        { id: 2, title: 'Dead Cells', category: 'Action', coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg', timeToBeat: 20, sessionLength: 25, platform: 'PC', owned: true },
        { id: 3, title: 'Celeste', category: 'Platformer', coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1qvz.jpg', timeToBeat: 8, sessionLength: 15, platform: 'PC', owned: true },
        { id: 4, title: 'Hollow Knight', category: 'Metroidvania', coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2d0y.jpg', timeToBeat: 25, sessionLength: 45, platform: 'PC', owned: true },
    ];
};