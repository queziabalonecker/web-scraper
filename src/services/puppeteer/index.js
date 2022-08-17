const browserObject = require('./browser');
const scrapController = require('./pageController');

let browserInstance = browserObject.startBrowser();

scrapController(browserInstance);
