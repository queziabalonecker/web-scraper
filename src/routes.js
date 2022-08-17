const { Router } = require('express');
const { notebookScraping } = require('./controllers/scrapController');

const routes = Router();

routes.get('/notebook-scrap', notebookScraping);

module.exports = routes;
