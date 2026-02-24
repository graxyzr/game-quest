// src/services/freeToGameService.js - VERSÃO COMPLETA COM 30 JOGOS

export const getGames = async () => {
    console.log('🎮 Usando dados de fallback com 30 jogos');
    return getFallbackGames();
};

const getFallbackGames = () => [
    // === INDIE / ROGUELIKE ===
    {
        id: 1,
        title: 'Hades',
        category: 'Roguelike',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 22,
        sessionLength: 30,
        platform: 'PC',
        owned: true
    },
    {
        id: 2,
        title: 'Hollow Knight',
        category: 'Metroidvania',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2d0y.jpg',
        timeToBeat: 25,
        sessionLength: 45,
        platform: 'PC',
        owned: true
    },
    {
        id: 3,
        title: 'Celeste',
        category: 'Platformer',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1qvz.jpg',
        timeToBeat: 8,
        sessionLength: 15,
        platform: 'PC',
        owned: true
    },
    {
        id: 4,
        title: 'Stardew Valley',
        category: 'Simulation',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1y5a.jpg',
        timeToBeat: 52,
        sessionLength: 20,
        platform: 'PC',
        owned: true
    },
    {
        id: 5,
        title: 'Dead Cells',
        category: 'Roguelike',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 20,
        sessionLength: 25,
        platform: 'PC',
        owned: true
    },
    {
        id: 6,
        title: 'Cuphead',
        category: 'Platformer',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 10,
        sessionLength: 20,
        platform: 'PC',
        owned: true
    },
    {
        id: 7,
        title: 'Undertale',
        category: 'RPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 6,
        sessionLength: 30,
        platform: 'PC',
        owned: true
    },

    // === RPGs / GRANDES JOGOS ===
    {
        id: 8,
        title: 'The Witcher 3',
        category: 'RPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
        timeToBeat: 51,
        sessionLength: 120,
        platform: 'PC',
        owned: true
    },
    {
        id: 9,
        title: 'Baldur\'s Gate 3',
        category: 'CRPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.jpg',
        timeToBeat: 75,
        sessionLength: 180,
        platform: 'PC',
        owned: true
    },
    {
        id: 10,
        title: 'Elden Ring',
        category: 'Soulslike',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4j0i.jpg',
        timeToBeat: 55,
        sessionLength: 90,
        platform: 'PC',
        owned: true
    },
    {
        id: 11,
        title: 'God of War Ragnarök',
        category: 'Action',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4j0i.jpg',
        timeToBeat: 26,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 12,
        title: 'Red Dead Redemption 2',
        category: 'Action',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 50,
        sessionLength: 120,
        platform: 'PC',
        owned: true
    },
    {
        id: 13,
        title: 'Cyberpunk 2077',
        category: 'RPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 25,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 14,
        title: 'Fallout 4',
        category: 'RPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 27,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 15,
        title: 'Skyrim',
        category: 'RPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 34,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },

    // === SOULSLIKE / AÇÃO ===
    {
        id: 16,
        title: 'Dark Souls 3',
        category: 'Soulslike',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 32,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 17,
        title: 'Sekiro',
        category: 'Action',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 30,
        sessionLength: 45,
        platform: 'PC',
        owned: true
    },
    {
        id: 18,
        title: 'Bloodborne',
        category: 'Soulslike',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 33,
        sessionLength: 45,
        platform: 'PlayStation',
        owned: true
    },

    // === STRATEGY / SIMULAÇÃO ===
    {
        id: 19,
        title: 'Civilization VI',
        category: 'Strategy',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 40,
        sessionLength: 120,
        platform: 'PC',
        owned: true
    },
    {
        id: 20,
        title: 'Factorio',
        category: 'Simulation',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 45,
        sessionLength: 90,
        platform: 'PC',
        owned: true
    },
    {
        id: 21,
        title: 'Cities Skylines',
        category: 'Simulation',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 40,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },

    // === TERROR / SOBREVIVÊNCIA ===
    {
        id: 22,
        title: 'Resident Evil 4',
        category: 'Horror',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 16,
        sessionLength: 45,
        platform: 'PC',
        owned: true
    },
    {
        id: 23,
        title: 'Silent Hill 2',
        category: 'Horror',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 10,
        sessionLength: 30,
        platform: 'PC',
        owned: true
    },
    {
        id: 24,
        title: 'The Last of Us',
        category: 'Action',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 15,
        sessionLength: 60,
        platform: 'PlayStation',
        owned: true
    },

    // === PUZZLE / CASUAL ===
    {
        id: 25,
        title: 'Portal 2',
        category: 'Puzzle',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 8,
        sessionLength: 30,
        platform: 'PC',
        owned: true
    },
    {
        id: 26,
        title: 'The Witness',
        category: 'Puzzle',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 18,
        sessionLength: 30,
        platform: 'PC',
        owned: true
    },

    // === MULTIPLAYER / CO-OP ===
    {
        id: 27,
        title: 'It Takes Two',
        category: 'Co-op',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 12,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 28,
        title: 'Valheim',
        category: 'Survival',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 40,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },

    // === CLASSICOS ===
    {
        id: 29,
        title: 'Chrono Trigger',
        category: 'RPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 22,
        sessionLength: 45,
        platform: 'SNES',
        owned: true
    },
    {
        id: 30,
        title: 'Final Fantasy VII',
        category: 'RPG',
        coverUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r42.jpg',
        timeToBeat: 36,
        sessionLength: 60,
        platform: 'PlayStation',
        owned: true
    }
];