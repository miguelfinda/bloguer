//Routas da aplicação
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);//exemplo de rota para a página inicial



router.get('/divulgar', function(req, res) {
  res.render('pages/divulgar', { title: 'Divulgar' });//exemplo de renderização da página divulgar
});


 module.exports = router; 

//rota para a pgina categorias

router.get('/categoria', function(req, res) {
  res.render('pages/categoria', { title: 'Categoria' });//exemplo de renderização da página categoria
});


//rota da pagina descricao
router.get('/descricao',function(req, res) {
  res.render('pages/descricao',{title:'descricao'});

});


// //rota do kuduro

// router.get('/kuduro',function(req, res){

// res.render('pages/kuduro', {title: 'kuduro' });


// pediste oara fazer apenas a renderização da categoria
// });