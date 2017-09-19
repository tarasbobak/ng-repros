import { NgReprosPage } from './app.po';

describe('ng-repros App', () => {
  let page: NgReprosPage;

  beforeEach(() => {
    page = new NgReprosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
