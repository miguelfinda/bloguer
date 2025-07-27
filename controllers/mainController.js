// Lógica das rotas
module.exports = {
  home: (req, res) => res.render('pages/home', { title: 'Página Inicial' }),
  artistas: (req, res) => res.render('pages/artistas'),
  categoria: (req, res) => res.render('pages/categoria',{ title: 'Categoria' })
};

