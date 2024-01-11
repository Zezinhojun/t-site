// @ts-ignore
import AuthLogo from "./extensions/logo.png";
// @ts-ignore
import MenuLogo from "./extensions/logo.png";
// @ts-ignore
import favicon from "./extensions/logo.png";

const config = {
  head: {
    favicon: favicon
  },
  auth: {
    logo: AuthLogo
  },
  menu: {
    logo: MenuLogo,
  },
  locales: ['pt-BR', "en"],
  translations: {
    en: {
      "Auth.form.welcome.title": "Seja bem vindo, Think sites",
      "Auth.form.button.login.strapi": "Entrar com Think sites",
      "Auth.form.welcome.subtitle": "Entrar na sua conta do Think sites",
      "HomePage.welcome.congrats.content": "Você está logado como o primeiro administrador. Para descobrir os recursos avançados fornecidos pelo Think sites,",
      "Settings.application.strapi-version": "versão do Think sites",
      "Settings.application.strapiVersion": "versão do Think sites",
      "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi": "Criado por Think sites",
      "admin.pages.MarketPlacePage.plugin.tooltip.verified": "Extensão verificada por Think sites",
      "admin.pages.MarketPlacePage.subtitle": "Faça mais com o Think sites",
      "admin.pages.MarketPlacePage.tab-group.label": "Plugins e Provedores para Think sites",
      "app.components.BlockLink.tutorial.content": "Siga o passo-a-passo para usar e customizar o Think sites.",
      "app.components.LeftMenu.navbrand.title": "Painel do Think sites",
      "app.components.MarketplaceBanner.image.alt": "um logo de foguete do Think sites",
      "components.AutoReloadBlocker.description": "Execute o Think sites com um dos seguintes comandos:",
      "notification.version.update.message": "Uma nova versão do Think sites está disponível!",
    },
  },
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
