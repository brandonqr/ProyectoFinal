import { ProyectoFinalPage } from './app.po';

describe('proyecto-final App', () => {
  let page: ProyectoFinalPage;

  beforeEach(() => {
    page = new ProyectoFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
