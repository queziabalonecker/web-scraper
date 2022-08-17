const browserObject = require('../services/puppeteer/browser');
const scrapController = require('../services/puppeteer/pageController');

const notebookScraping = async (req, res) => {
  try {
    let browserInstance = browserObject.startBrowser();
    const notebooks = await scrapController(browserInstance);

    return res.status(200).json(notebooks);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
};

module.exports = { notebookScraping };
