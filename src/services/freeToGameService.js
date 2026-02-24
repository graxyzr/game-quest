export const getGames = async () => {
    console.log('🎮 Usando dados de fallback com imagens placeholder');
    return getFallbackGames();
};

const getFallbackGames = () => [
    {
        id: 1,
        title: 'Hades',
        category: 'Roguelike',
        coverUrl: 'https://placehold.co/300x400/1C1C24/3B82F6?text=HADES',
        timeToBeat: 22,
        sessionLength: 30,
        platform: 'PC',
        owned: true
    },
    {
        id: 2,
        title: 'Hollow Knight',
        category: 'Metroidvania',
        coverUrl: 'https://placehold.co/300x400/1C1C24/A855F7?text=HOLLOW+KNIGHT',
        timeToBeat: 25,
        sessionLength: 45,
        platform: 'PC',
        owned: true
    },
    {
        id: 3,
        title: 'Celeste',
        category: 'Platformer',
        coverUrl: 'https://placehold.co/300x400/1C1C24/00FFFF?text=CELESTE',
        timeToBeat: 8,
        sessionLength: 15,
        platform: 'PC',
        owned: true
    },
    {
        id: 4,
        title: 'Stardew Valley',
        category: 'Simulation',
        coverUrl: 'https://placehold.co/300x400/1C1C24/00FF88?text= STARDEW+VALLEY',
        timeToBeat: 52,
        sessionLength: 20,
        platform: 'PC',
        owned: true
    },
    {
        id: 5,
        title: 'Dead Cells',
        category: 'Roguelike',
        coverUrl: 'https://placehold.co/300x400/1C1C24/F472B6?text=DEAD+CELLS',
        timeToBeat: 20,
        sessionLength: 25,
        platform: 'PC',
        owned: true
    },
    {
        id: 6,
        title: 'Cuphead',
        category: 'Platformer',
        coverUrl: 'https://placehold.co/300x400/1C1C24/FFB800?text=CUPHEAD',
        timeToBeat: 10,
        sessionLength: 20,
        platform: 'PC',
        owned: true
    },
    {
        id: 7,
        title: 'Undertale',
        category: 'RPG',
        coverUrl: 'https://placehold.co/300x400/1C1C24/FF4444?text=UNDERTALE',
        timeToBeat: 6,
        sessionLength: 30,
        platform: 'PC',
        owned: true
    },
    {
        id: 8,
        title: 'The Witcher 3',
        category: 'RPG',
        coverUrl: 'https://placehold.co/300x400/1C1C24/3B82F6?text=WITCHER+3',
        timeToBeat: 51,
        sessionLength: 120,
        platform: 'PC',
        owned: true
    },
    {
        id: 9,
        title: 'Baldur\'s Gate 3',
        category: 'CRPG',
        coverUrl: 'https://placehold.co/300x400/1C1C24/A855F7?text=BG3',
        timeToBeat: 75,
        sessionLength: 180,
        platform: 'PC',
        owned: true
    },
    {
        id: 10,
        title: 'Elden Ring',
        category: 'Soulslike',
        coverUrl: 'https://placehold.co/300x400/1C1C24/FFB800?text=ELDEN+RING',
        timeToBeat: 55,
        sessionLength: 90,
        platform: 'PC',
        owned: true
    },
    {
        id: 11,
        title: 'God of War Ragnarök',
        category: 'Action',
        coverUrl: 'https://placehold.co/300x400/1C1C24/00FFFF?text=GOW+RAGNAROK',
        timeToBeat: 26,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 12,
        title: 'Red Dead Redemption 2',
        category: 'Action',
        coverUrl: 'https://placehold.co/300x400/1C1C24/FF4444?text=RDR2',
        timeToBeat: 50,
        sessionLength: 120,
        platform: 'PC',
        owned: true
    },
    {
        id: 13,
        title: 'Cyberpunk 2077',
        category: 'RPG',
        coverUrl: 'https://placehold.co/300x400/1C1C24/00FF88?text=CYBERPUNK',
        timeToBeat: 25,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 14,
        title: 'Fallout 4',
        category: 'RPG',
        coverUrl: 'https://placehold.co/300x400/1C1C24/F472B6?text=FALLOUT+4',
        timeToBeat: 27,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 15,
        title: 'Skyrim',
        category: 'RPG',
        coverUrl: 'https://placehold.co/300x400/1C1C24/3B82F6?text=SKYRIM',
        timeToBeat: 34,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 16,
        title: 'Dark Souls 3',
        category: 'Soulslike',
        coverUrl: 'https://placehold.co/300x400/1C1C24/A855F7?text=DARK+SOULS+3',
        timeToBeat: 32,
        sessionLength: 60,
        platform: 'PC',
        owned: true
    },
    {
        id: 17,
        title: 'Sekiro',
        category: 'Action',
        coverUrl: 'https://placehold.co/300x400/1C1C24/00FFFF?text=SEKIRO',
        timeToBeat: 30,
        sessionLength: 45,
        platform: 'PC',
        owned: true
    },
    {
        id: 18,
        title: 'Bloodborne',
        category: 'Soulslike',
        coverUrl: 'https://placehold.co/300x400/1C1C24/FFB800?text=BLOODBORNE',
        timeToBeat: 33,
        sessionLength: 45,
        platform: 'PlayStation',
        owned: true
    },
    {
        id: 19,
        title: 'Civilization VI',
        category: 'Strategy',
        coverUrl: 'https://placehold.co/300x400/1C1C24/00FF88?text=CIV+VI',
        timeToBeat: 40,
        sessionLength: 120,
        platform: 'PC',
        owned: true
    },
    {
        id: 20,
        title: 'Factorio',
        category: 'Simulation',
        coverUrl: 'https://placehold.co/300x400/1C1C24/FF4444?text=FACTORIO',
        timeToBeat: 45,
        sessionLength: 90,
        platform: 'PC',
        owned: true
    }
];