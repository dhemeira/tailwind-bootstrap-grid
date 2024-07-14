# tailwind-bootstrap-grid

Plugin to add Bootstrap grid classes into your Tailwind project.

## Disabling tailwind's .container

To use this plugin, you need to disable tailwind's built-in container class. To do so, add the following into your tailwind config:

```diff
/** @type {import('tailwindcss').Config} */
export default {
+  corePlugins: {
+    container: false,
+  },
  // ...
};
```

## Adding the plugin

Import the package and add it to your plugin list:

```diff
+ import bsGrid from '@dhemeira/tailwind-bootstrap-grid';

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false,
  },
  // ...
+  plugins: [bsGrid],
};
```

## Using the plugin

Now you can use `.container`, `.row`, `.col` and `.col-` classes. You can use them on a specific breakpoint, e.g.: `md:col-6`. For more information check out [Bootstrap v5.3 Grid](https://getbootstrap.com/docs/5.3/layout/grid/)

Gutter utilities are also available. For more information check out [Bootstrap v5.3 Gutters](https://getbootstrap.com/docs/5.3/layout/gutters/)
