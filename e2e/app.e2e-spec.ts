import { FrtPollitics2020Page } from './app.po';

describe('frt-pollitics2020 App', function() {
  let page: FrtPollitics2020Page;

  beforeEach(() => {
    page = new FrtPollitics2020Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
