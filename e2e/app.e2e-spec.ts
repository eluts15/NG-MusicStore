import { MusicStorePage } from './app.po';

describe('music-store App', () => {
  let page: MusicStorePage;

  beforeEach(() => {
    page = new MusicStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
