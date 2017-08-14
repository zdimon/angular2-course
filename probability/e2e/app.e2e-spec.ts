import { ProbabilityPage } from './app.po';

describe('probability App', () => {
  let page: ProbabilityPage;

  beforeEach(() => {
    page = new ProbabilityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
