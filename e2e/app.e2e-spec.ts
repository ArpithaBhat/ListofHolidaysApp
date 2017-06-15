import { Ng4HolidaysPage } from './app.po';

describe('ng4-holidays App', () => {
  let page: Ng4HolidaysPage;

  beforeEach(() => {
    page = new Ng4HolidaysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
