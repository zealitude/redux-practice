import { ReduxPracticePage } from './app.po';

describe('redux-practice App', () => {
  let page: ReduxPracticePage;

  beforeEach(() => {
    page = new ReduxPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
