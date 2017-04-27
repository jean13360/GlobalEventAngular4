import { GlobalEventAngular4Page } from './app.po';

describe('global-event-angular4 App', () => {
  let page: GlobalEventAngular4Page;

  beforeEach(() => {
    page = new GlobalEventAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
