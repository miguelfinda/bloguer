
const express = require('express');
const path = require('path');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// Middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layout');
app.set('views', path.join(__dirname, 'views'));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
