export interface Product {
  id: string;
  name: string;
  category: 'brigadeiros' | 'copos' | 'brownies' | 'morangos' | 'sobremesas';
  categoryLabel: string;
  description: string;
  ingredients: string;
  price: number;
  unit: string;
  badge?: string;
  isFavorite?: boolean;
  image: string;
}

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Doces' },
  { id: 'copos', label: 'Copos da Felicidade' },
  { id: 'morangos', label: 'Morangos Cravejados' },
  { id: 'brownies', label: 'Brownies Gourmet' },
  { id: 'brigadeiros', label: 'Brigaderia Artesanal' },
  { id: 'sobremesas', label: 'Sobremesas & Cafés' },
] as const;

export const PRODUCTS: Product[] = [
  // COPOS DA FELICIDADE
  {
    id: 'copo-felicidade-ninho-nutella-morango',
    name: 'Copo da Felicidade: Ninho, Nutella & Morangos',
    category: 'copos',
    categoryLabel: 'Copos da Felicidade',
    description: 'Camadas generosas de brigadeiro cremoso de Ninho, morangos frescos picados na hora, Nutella original e pedacinhos macios de brownie.',
    ingredients: 'Leite condensado de alta densidade, leite em pó Ninho, morangos frescos selecionados, pura Nutella e brownie de cacau.',
    price: 26.90,
    unit: 'copo 350ml generoso',
    badge: 'O Mais Pedido',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'copo-felicidade-brownie-kinder',
    name: 'Copo da Felicidade: Brownie Belga & Kinder Bueno',
    category: 'copos',
    categoryLabel: 'Copos da Felicidade',
    description: 'Cubos úmidos de brownie artesanal, brigadeiro belga aveludado de panela de cobre, creme suave de avelã e barra de Kinder Bueno crocante.',
    ingredients: 'Brownie farto, chocolate belga Callebaut, creme de leite fresco, raspas de chocolate e Kinder Bueno legítimo.',
    price: 29.90,
    unit: 'copo 350ml generoso',
    badge: 'Puro Chocolate',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'copo-felicidade-pistache-frutas',
    name: 'Copo da Felicidade: Pistache Real & Geleia de Frutas Vermelhas',
    category: 'copos',
    categoryLabel: 'Copos da Felicidade',
    description: 'Brigadeiro aveludado de pistache italiano puro, redução artesanal de frutas vermelhas e crocante de pistache tostado.',
    ingredients: 'Pasta pura de pistache de Bronte, chocolate branco nobre, amora, mirtilo, framboesa e pistache laminado.',
    price: 32.00,
    unit: 'copo 350ml generoso',
    badge: 'Edição Nobre',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'copo-felicidade-ouro-branco',
    name: 'Copo da Felicidade: Ouro Branco & Trufado',
    category: 'copos',
    categoryLabel: 'Copos da Felicidade',
    description: 'Alternância perfeita de brigadeiro branco cremoso, ganache meio amarga intensa e bombons Ouro Branco picados crocantes.',
    ingredients: 'Brigadeiro branco aveludado, cacau 50%, bombons Ouro Branco e fios de calda toffee.',
    price: 27.50,
    unit: 'copo 350ml generoso',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  },

  // MORANGOS CRAVEJADOS
  {
    id: 'morango-cravejado-belga',
    name: 'Morango Gigante Cravejado no Chocolate Belga',
    category: 'morangos',
    categoryLabel: 'Morangos Cravejados',
    description: 'Morango nobre gigante, envolto em brigadeiro cremoso de panela, banhado em chocolate ao leite nobre e cravejado com confeitos belgas crocantes.',
    ingredients: 'Morango selecionado tipo exportação, brigadeiro tradicional artesanal e confeitos Callebaut crispies.',
    price: 18.00,
    unit: 'unidade gigante especial',
    badge: 'Sensação do Momento',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'morango-cravejado-ninho-nutella',
    name: 'Morango Cravejado: Ninho & Coração de Nutella',
    category: 'morangos',
    categoryLabel: 'Morangos Cravejados',
    description: 'Morango fresco envolto em cama farta de brigadeiro de Leite Ninho, banhado em chocolate branco e cravejado com leite em pó e Nutella pura.',
    ingredients: 'Morangos in natura, brigadeiro de leite Ninho, chocolate branco puro e toque de avelã.',
    price: 19.50,
    unit: 'unidade gigante especial',
    badge: 'Favorito',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'morango-cravejado-pistache',
    name: 'Morango Cravejado com Pistache Crocante',
    category: 'morangos',
    categoryLabel: 'Morangos Cravejados',
    description: 'Morango premium recheado com brigadeiro de pistache, cobertura de chocolate nobre meio amargo e cravejado com lascas de pistache tostado.',
    ingredients: 'Morangos frescos da serra, pasta de pistache italiana, chocolate meio amargo 54% e xerém de pistache.',
    price: 21.00,
    unit: 'unidade gigante especial',
    badge: 'Gourmet',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'barquete-morangos-brigadeiro',
    name: 'Barquete Especial de Morangos com Brigadeiro de Colher',
    category: 'morangos',
    categoryLabel: 'Morangos Cravejados',
    description: 'Barquete crocante de chocolate recheada com brigadeiro de colher fumegante e coberta por morangos frescos cravejados.',
    ingredients: 'Massa crocante de chocolate, brigadeiro meio amargo de colher e morangos frescos.',
    price: 28.00,
    unit: 'porção individual farta',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  },

  // BROWNIES GOURMET
  {
    id: 'brownie-recheado-nutella',
    name: 'Fatia Alta de Brownie Recheado com Pura Nutella',
    category: 'brownies',
    categoryLabel: 'Brownies Gourmet',
    description: 'Massa úmida e densa com aquela casquinha craquelada perfeita, recheada até a borda com Nutella e finalizada com morango fresco.',
    ingredients: 'Chocolate meio amargo nobre, manteiga de primeira linha, ovos frescos, farinha de trigo pura e Nutella original.',
    price: 18.50,
    unit: 'fatia farta (approx. 180g)',
    badge: 'Casquinha Perfeita',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brownie-doce-de-leite-noz',
    name: 'Brownie Vulcão de Doce de Leite com Nozes',
    category: 'brownies',
    categoryLabel: 'Brownies Gourmet',
    description: 'Brownie chocolatudo com piscina generosa de doce de leite argentino cremoso e nozes chilenas levemente tostadas.',
    ingredients: 'Cacau 70%, doce de leite artesanal em ponto de bico e pedaços de nozes.',
    price: 19.90,
    unit: 'fatia generosa (200g)',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pizza-brownie-individual',
    name: 'Mini Pizza Brownie: 4 Recheios Nobres',
    category: 'brownies',
    categoryLabel: 'Brownies Gourmet',
    description: 'Disco de brownie macio fatiado em 4 pedaços: Brigadeiro Belga, Ninho com Nutella, Morangos Cravejados e Doce de Leite.',
    ingredients: 'Base de brownie tradicional 16cm, coberturas nobres artesanais e frutas frescas.',
    price: 36.00,
    unit: 'disco 16cm (para compartilhar)',
    badge: 'Para Compartilhar',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
  },

  // BRIGADERIA ARTESANAL
  {
    id: 'brigadeiro-belga-puro',
    name: 'Brigadeiro Belga Noir 70%',
    category: 'brigadeiros',
    categoryLabel: 'Brigaderia Artesanal',
    description: 'Apurado pacientemente na panela pesada de cobre com chocolate belga Callebaut 70% e finalizado com pérolas crocantes.',
    ingredients: 'Chocolate belga amargo 70%, leite condensado artesanal de alta densidade e manteiga extra.',
    price: 6.50,
    unit: 'unidade (25g)',
    badge: 'Assinatura da Casa',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brigadeiro-ninho-nutella',
    name: 'Brigadeiro Pedaço do Céu (Ninho & Nutella)',
    category: 'brigadeiros',
    categoryLabel: 'Brigaderia Artesanal',
    description: 'Brigadeiro aveludado de leite Ninho recheado com um coração farto de pura Nutella cremosa. O grande amor dos nossos clientes.',
    ingredients: 'Leite em pó Ninho, cacau nobre, creme de avelã autêntico e leite condensado moça.',
    price: 7.00,
    unit: 'unidade (30g)',
    badge: 'Top 1 Vendas',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'brigadeiro-pistache-siciliano',
    name: 'Brigadeiro de Pistache Siciliano Puro',
    category: 'brigadeiros',
    categoryLabel: 'Brigaderia Artesanal',
    description: 'Feito com pasta 100% de pistache italiano importado e coberto com lâminas crocantes de pistache tostado.',
    ingredients: 'Pasta pura de pistache, chocolate branco nobre e xerém de pistache.',
    price: 8.50,
    unit: 'unidade (25g)',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'caixa-degustacao-brigadeiros',
    name: 'Caixa Presente com 12 Brigadeiros Sortidos',
    category: 'brigadeiros',
    categoryLabel: 'Brigaderia Artesanal',
    description: 'Caixa cartonada luxo com fita de cetim, contendo nossa seleção campeã: Belga Noir, Ninho Nutella, Pistache, Churros e Caramelo Flor de Sal.',
    ingredients: 'Seleção dos 12 brigadeiros mais premiados da brigaderia.',
    price: 68.00,
    unit: 'caixa luxo com 12 unidades',
    badge: 'Presente Perfeito',
    isFavorite: true,
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80',
  },

  // SOBREMESAS & CAFÉS GELADOS
  {
    id: 'bolo-pote-cenoura-brigadeiro',
    name: 'Bolo de Pote: Cenoura Fofinho com Brigadeiro Vulcão',
    category: 'sobremesas',
    categoryLabel: 'Sobremesas & Cafés',
    description: 'Massa molhadinha de cenoura com cenouras frescas e camadas abundantes do nosso brigadeiro de chocolate cremoso.',
    ingredients: 'Cenouras frescas selecionadas, brigadeiro cremoso de panela e calda aveludada.',
    price: 18.00,
    unit: 'pote 250ml',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'frappe-cremoso-brigadeiro',
    name: 'Frapê Gelado de Café com Borda de Brigadeiro Belga',
    category: 'sobremesas',
    categoryLabel: 'Sobremesas & Cafés',
    description: 'Café gourmet batido com sorvete de creme, calda de chocolate e taça lambuzada com brigadeiro de panela e granulado belga.',
    ingredients: 'Espresso nobre, sorvete artesanal, brigadeiro belga 70% e chantilly fresco.',
    price: 21.00,
    unit: 'taça 400ml',
    badge: 'Refrescante',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
  },
];

export interface CartItem {
  product: Product;
  quantity: number;
}
