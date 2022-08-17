const scraperObject = {
  url: 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops',

  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
  },
};

module.exports = scraperObject;
