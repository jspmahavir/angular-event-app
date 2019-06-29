import { Ng4tutorialPage } from './app.po';

describe('ng4tutorial App', function() {
  let page: Ng4tutorialPage;

  beforeEach(() => {
    page = new Ng4tutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
