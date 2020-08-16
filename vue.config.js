module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/quem-somos"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
