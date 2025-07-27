//Routas da aplicação
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/artistas', mainController.artistas);
router.get('/categoria', mainController.categoria);

module.exports = router;
