// api/proxy.js
export default async function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Responder preflight requests (OPTIONS)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Só aceita GET
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        console.log('✅ Proxy: Buscando jogos da FreeToGame API...');

        const response = await fetch('https://www.freetogame.com/api/games');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log(`✅ Proxy: Encontrados ${data.length} jogos`);

        // Retornar os dados
        res.status(200).json(data);
    } catch (error) {
        console.error('❌ Proxy erro:', error);
        res.status(500).json({
            error: 'Erro ao buscar jogos',
            details: error.message
        });
    }
}