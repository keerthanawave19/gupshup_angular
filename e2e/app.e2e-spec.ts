import { GupshupPage } from './app.po';

describe('gupshup App', () => {
  let page: GupshupPage;

  beforeEach(() => {
    page = new GupshupPage();
  });

<<<<<<< HEAD
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
=======
  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> 8b8fc8855e9124aae9707ee7f7ff9d26e4145c6b
  });
});
