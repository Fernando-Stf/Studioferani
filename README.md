# Studio Ferani Planejados

Site institucional premium para a marca Studio Ferani Planejados - móveis planejados sob medida.

## Design Premium Implementado

### Visual Identity
- **Paleta de Cores Premium:**
  - Bordô (#790808) - Cor institucional
  - Dourado (#C9A34A) - Destaque e elegância
  - Vinho (#570505) - Fundos e rodapé
  - Bege (#F5F0E9) - Áreas suaves
  - Grafite (#282522) - Textos e títulos

### Tipografia
- **Playfair Display** - Títulos e headers (elegante, serifada)
- **Inter** - Textos corpo (moderna, sans-serif)
- Hierarquia tipográfica clara e sofisticada

### Efeitos Visuais
- Animações suaves com cubic-bezier para transições premium
- Parallax sutil em imagens de fundo
- Efeito de brilho em botões ao passar o mouse
- Gradientes sutis nos elementos principais
- Sombras multicamadas para profundidade

### Funcionalidades
- **Progress Indicator** - Barra de rolagem no topo
- **Scroll Animations** - Elementos aparecem ao rolar
- **Sticky Header** - Transição suave com backdrop blur
- **WhatsApp Integration** - Botão flutuante com animação
- **Smooth Scroll** - Navegação fluida entre seções
- **Mobile Responsive** - Menu hambúrguer animado

## Estrutura do Projeto

```
pj3/
├── index.html              # Página principal (HTML semântico)
├── css/
│   └── styles.css          # Estilos premium (1000+ linhas)
├── js/
│   └── main.js             # JavaScript de interatividade
├── images/                 # Pasta para imagens personalizadas
│   ├── environments/       # Imagens de ambientes
│   └── portfolio/          # Imagens do portfólio
└── README.md               # Documentação
```

## Como Usar

1. **Abrir o site:** Abra `index.html` no navegador
2. **Personalizar cores:** Edite as variáveis CSS em `:root`
3. **Adicionar imagens:** Substitua os links Unsplash por suas imagens
4. **Configurar WhatsApp:** Edite `WhatsAppConfig` em `js/main.js`

## Cores Personalizáveis (CSS)

```css
--color-bordro: #790808;      /* Cor principal */
--color-dourado: #C9A34A;     /* Destaque */
--color-vinho: #570505;       /* Fundos escuros */
--color-bege: #F5F0E9;        /* Áreas suaves */
--color-grafite: #282522;     /* Textos */
```

## Funcionalidades Premium

| Recurso | Descrição |
|---------|-----------|
| Hero com fundo | Imagem de alta qualidade com overlay |
| Diferenciais | Ícones animados com hover effects |
| Ambientes | Cards com overlay de zoom |
| Portfolio | Galeria com botões overlay |
| Processo | Passos numerados com animação |
| CTA Premium | Seção chamativa para orçamento |
| WhatsApp Float | Botão animado no canto |
| Progress Bar | Indicador de rolagem |
| Scroll Animations | Elementos fadeIn ao rolar |

## Responsividade

| Breakpoint | Descrição |
|------------|-----------|
| 1024px+ | Desktop (layout completo) |
| 768px - 1023px | Tablet (2 colunas) |
| < 768px | Mobile (1 coluna, menu hambúrguer) |

## Acessibilidade

- Semântica HTML5 completa
- ARIA labels em elementos interativos
- Navegação por teclado (Tab/Escape)
- Contraste adequado (WCAG AA)
- Skip link para acessibilidade
- Reduced motion support

## Otimizações

- CSS moderno com variáveis
- Transições hardware-accelerated
- Imagens lazy loading
- JavaScript modular e otimizado
- Sem dependências externas (exceto fonts)

## Configuração do WhatsApp

No arquivo `js/main.js`, edite a constante:

```javascript
const WhatsAppConfig = {
  phoneNumber: '5500000000000',      // Altere para seu número
  message: 'Olá! Conheci o site...'   // Mensagem personalizada
}
```

## Suporte e Customização

Para alterar cores, edite as variáveis em `:root` no CSS. Para adicionar novas seções, siga o padrão existente nos HTML e CSS.

---

© 2026 Studio Ferani Planejados. Todos os direitos reservados.
