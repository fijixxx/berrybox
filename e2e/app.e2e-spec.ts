import { OrenomemoPage } from './app.po';

describe('orenomemo App', () => {
  let page: OrenomemoPage;

  beforeEach(() => {
    page = new OrenomemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
