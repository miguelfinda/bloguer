const express = require('express');
const path = require('path');
const app = express();
const indexRoutes = require('./routes/index');
const expressLayouts = require("express-ejs-layouts");




app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layout"); // ou apenas 'layout' se estiver na raiz da pasta 'views'

app.use(express.static("public"))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
