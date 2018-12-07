module.exports = {
  pwa: {
    name: "New Test",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/service-worker.js"
      // ...other Workbox options...
    }
  }
};
