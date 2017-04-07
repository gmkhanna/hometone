import { HomeTonePage } from './app.po';

describe('home-tone App', function() {
  let page: HomeTonePage;

  beforeEach(() => {
    page = new HomeTonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
