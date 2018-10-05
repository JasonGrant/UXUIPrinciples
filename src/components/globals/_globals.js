// Globally register all base components for convenience, because they
// will be used very frequently.

import Vue from "vue";

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  ".",
  // Do not look in subdirectories
  false,
  /[\w-]+\.vue$/
);

// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName);

  const componentName = fileName
    // Remove the "./" from the beginning
    .replace(/^\.\//, "")
    // Remove the file extension from the end
    .replace(/\.\w+$/, "");

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig);
});
