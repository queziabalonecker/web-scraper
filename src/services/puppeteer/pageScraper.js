const scraperObject = {
  url: 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops',

  async scraper(browser) {
    let page = await browser.newPage();

    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);

    const notebooks = await page.$$eval('.thumbnail', (itens) => {
      itens = itens.filter(
        (item) => item.querySelector('h4 > a').title.includes('Lenovo') //the notebook's brand could be dynamically choose by the request's body or params
      );
      let id = 0;
      const notebooksData = itens.map((notebook) => {
        const title = notebook.querySelector('h4 > a').title;
        const imagem = notebook.querySelector('img').src;
        const link = notebook.querySelector('.caption > h4 > a').href;
        const price = notebook.querySelector('.caption > .price').innerText;

        const description = notebook.querySelector(
          '.caption > .description'
        ).innerText;

        const rating = notebook
          .querySelectorAll('.ratings > p')[1]
          .getAttribute('data-rating');

        const reviews = notebook.querySelector('.ratings > p').innerText;

        id++;
        return {
          id,
          title,
          imagem,
          link,
          price,
          description,
          rating,
          reviews,
        };
      });

      const priceSortedNotebooks = notebooksData.sort(
        (a, b) => Number(a.price.substring(1)) - Number(b.price.substring(1))
      );

      return priceSortedNotebooks;
    });

    return notebooks;
  },
};

module.exports = scraperObject;
