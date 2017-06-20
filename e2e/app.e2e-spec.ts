import { DependPage } from './app.po';

describe('depend App', () => {
  let page: DependPage;

  beforeEach(() => {
    page = new DependPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
