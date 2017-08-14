import { Todo2Page } from './app.po';

describe('todo2 App', () => {
  let page: Todo2Page;

  beforeEach(() => {
    page = new Todo2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
