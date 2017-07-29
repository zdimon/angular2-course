import { CardPage } from './app.po';

describe('card App', () => {
  let page: CardPage;

  beforeEach(() => {
    page = new CardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
