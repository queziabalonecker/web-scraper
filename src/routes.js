const { Router } = require('express');
const { notebookScrapping } = require('./controllers/scrapController');

const routes = Router();

routes.get('/notebook-scrap', notebookScrapping);

module.exports = routes;
