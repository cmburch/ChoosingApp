import { DatingAppSpaPage } from './app.po';

describe('dating-app-spa App', function() {
  let page: DatingAppSpaPage;

  beforeEach(() => {
    page = new DatingAppSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
