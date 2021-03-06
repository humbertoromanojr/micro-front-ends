import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@jrdev/react-single",
  app: () => System.import("@jrdev/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@jrdev/react-multiples",
  app: () => System.import("@jrdev/react-multiples"),
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@jrdev/react-lazy",
  app: () => System.import("@jrdev/react-lazy"),
  activeWhen: ['/react-lazy'],
});

registerApplication({
  name: "@jrdev/react-form",
  app: () => System.import("@jrdev/react-form"),
  activeWhen: (location) => location.pathname === '/react-form',
});

registerApplication({
  name: "@jrdev/react-header",
  app: () => System.import("@jrdev/react-header"),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
