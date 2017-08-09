import { browser, by, element } from 'protractor';

export class CardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getDealButton() {
    return element(by.id('deal-button'));
  }  


  getCards() {
    return element.all(by.css('img.card'));
  } 

}
