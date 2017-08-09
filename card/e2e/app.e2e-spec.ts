import { CardPage } from './app.po';
import { by, element } from 'protractor';

describe('card App', () => {
  let page: CardPage;

  beforeEach(() => {
    page = new CardPage();
  });

  it('Кнопка раздачи', () => {
    page.navigateTo();
    let but = element(by.id('deal-button'));
    expect(but.getText()).toEqual('Get 6 cards');
    but.click();
    expect(element.all(by.css('img')).count()).toEqual(6); 
  });
});
