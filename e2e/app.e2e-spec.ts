import { RevmenPage } from './app.po';

describe('revmen App', () => {
  let page: RevmenPage;

  beforeEach(() => {
    page = new RevmenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
