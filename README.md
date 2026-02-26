# 🎮 GameQuest - Seu Gerenciador de Backlog de Jogos

## 📋 Sobre o Projeto

**GameQuest** é um web app desenvolvido para ajudar gamers a gerenciar seu backlog de jogos baseado no **tempo disponível** para jogar. Com uma interface cyberpunk e foco em usabilidade, o app filtra automaticamente os jogos que cabem no seu tempo livre.

### 🎯 Propósito
- Descubra qual jogo jogar baseado no tempo que você tem disponível
- Gerencie seu backlog de forma inteligente
- Visualize tempo estimado para zerar cada jogo
- Interface imersiva com tema cyberpunk

## ✨ Funcionalidades

- **⏱️ Filtro por Tempo Disponível**: Selecione de 15min a 5h+ e veja apenas jogos que cabem na sua sessão
- **⚡ Filtros Rápidos**: Coffee Break (15min), Almoço (30min), Noite (1h), Fim de Semana (2h+)
- **🔍 Busca em Tempo Real**: Encontre jogos por nome ou categoria
- **📊 Ordenação**: Por nome, tempo total ou duração da sessão
- **💾 Persistência**: Sua preferência de tempo é salva no localStorage
- **📱 Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **🎨 Tema Cyberpunk**: Design escuro com elementos neon e animações suaves

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js 18** (Hooks: useState, useEffect, useMemo)
- **Vite** (Build tool ultra-rápida)
- **Tailwind CSS** (Estilização - versão alternativa)
- **Lucide React** (Ícones modernos)

### API
- **FreeToGame API** (Dados de jogos gratuitos)
- **Proxy CORS** (Para contornar restrições de segurança)

### Ferramentas de Desenvolvimento
- ESLint
- PostCSS
- React Tooltip

## 📁 Estrutura do Projeto

```
game-quest/
├── src/
│   ├── components/
│   │   ├── QuickFilters.jsx    # Filtros rápidos (Coffee, Almoço, etc)
│   │   └── ... (outros componentes)
│   ├── services/
│   │   └── freeToGameService.js # Integração com a API
│   ├── styles/
│   │   └── theme.js            # Design tokens e tema
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Ponto de entrada
│   └── index.css                # Estilos globais
├── public/                      # Arquivos estáticos
├── index.html                   # HTML principal
├── package.json                 # Dependências
├── vite.config.js               # Configuração do Vite
├── tailwind.config.js           # Configuração do Tailwind
└── README.md                    # Documentação
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/game-quest.git
cd game-quest
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale pacotes adicionais**
```bash
npm install axios lucide-react react-tooltip --legacy-peer-deps
```

4. **Configure o proxy CORS** (crie `vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.freetogame.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

6. **Acesse no navegador**
```
http://localhost:5173
```

## 🔧 Configuração da API

O projeto usa a **FreeToGame API** que não requer chave de acesso. O serviço está configurado em `src/services/freeToGameService.js`:

```javascript
// Mapeamento inteligente de tempo de sessão por gênero
const sessionLengthByGenre = {
  'MMORPG': 60,    'Shooter': 20,
  'Strategy': 40,   'MOBA': 30,
  'Racing': 10,     'Sports': 15,
  'Fighting': 10,   'Battle Royale': 25,
  'Action': 15,     'Adventure': 20,
  // ... mais gêneros
};
```

## 🎨 Personalização do Tema

### Cores Principais
```css
--bg-primary: #0A0A0F;     /* Fundo principal */
--bg-secondary: #121217;    /* Fundo secundário */
--neon-blue: #3B82F6;       /* Azul neon primário */
--neon-purple: #A855F7;     /* Roxo neon secundário */
--neon-cyan: #00FFFF;       /* Ciano para destaques */
--neon-green: #00FF88;      /* Verde para sucesso */
```

### Animações
- **fadeUp**: Entrada suave dos cards
- **spin**: Loading spinner
- **flicker**: Efeito piscante no logo
- **hover-scale**: Ampliação suave nos cards

## 📱 Responsividade

| Dispositivo | Colunas | Breakpoint |
|------------|---------|------------|
| Mobile | 2 colunas | < 640px |
| Tablet | 3 colunas | 640px - 1024px |
| Desktop | 4 colunas | 1024px - 1280px |
| Wide | 5 colunas | > 1280px |

## 🐛 Solução de Problemas Comuns

### Erro de CORS
Se encontrar erro de CORS, o projeto já inclui proxy configurado. Verifique se o `vite.config.js` está correto.

### Dados não carregam
Abra o console (F12) e verifique:
- Se a API está respondendo: `https://www.freetogame.com/api/games`
- Se o proxy está funcionando: `http://localhost:5173/api/games`

### Filtro não funciona
Verifique se os mapeamentos de gênero estão corretos no console:
```javascript
// Ative o debug no serviço
import { getGamesWithDebug } from './services/freeToGameService';
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [graxyzr](https://github.com/graxyzr)
- LinkedIn: [Greice Pereira](https://www.linkedin.com/in/greice-pereira-b04a04318/)

## 🙏 Agradecimentos

- [FreeToGame API](https://www.freetogame.com/api)
- [Lucide Icons](https://lucide.dev/)

---

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!**

---
