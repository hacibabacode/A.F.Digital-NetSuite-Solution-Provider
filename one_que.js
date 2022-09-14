const puppeteer = require('puppeteer-core');

const scrape = async (from, to, amount) =>{
    const url = 'https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR?Amount=${amount}&From=${from}&To=${to}'

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [ element ] = await page.$x('/html/body/main/div[2]/div/div/div[2]/div/div[2]/div/div/div[6]/div/div[1]/div/table[1]/tbody/tr[2]/td[3]');

    const text = await element.getProperty("textContent");
    const textValue = await text.jsonValue();

    console.log(textValue);


    browser.close();

};

scrape("USD", "EUR");
