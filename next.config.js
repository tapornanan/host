/** @type {import('next').NextConfig} */

const { withFederatedSidecar } = require("@module-federation/nextjs-mf");


module.exports = withFederatedSidecar({
  name: "host",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./SimpleText": "./components/SimpleText.js",
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
  },
})({});