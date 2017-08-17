import { NgSelect2ProjectPage } from './app.po';

describe('ng-select2-project App', () => {
  let page: NgSelect2ProjectPage;

  beforeEach(() => {
    page = new NgSelect2ProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
