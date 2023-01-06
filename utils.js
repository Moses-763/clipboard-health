const { renderFile } = require('ejs');
const puppeteer = require('puppeteer');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname);
const ejsToHtml = (filename, variables) => {
  return new Promise((resolve, reject) => {
    renderFile(path.join(TEMPLATE_PATH, filename), variables, (err, html) => {
      try {
        if(err) throw err;
        resolve(html);
      } catch (error) {
        reject(err);
      }
    });
  });
}

const htmlToPdf = async (html) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'load' });
  await page.emulateMediaType('screen');
  const pdf = await page.pdf({
    height: '25in',
    width: '18in',
    path: 'report.pdf'
  });
  return pdf;
}


module.exports = {
  ejsToHtml,
  htmlToPdf,
}