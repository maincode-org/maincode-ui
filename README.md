<p align="center">
  <a href="https://strapi.io">
    <img src="./assets/MaincodeUITitle_Filled.png" width="581" alt="Maincode UI logo" />
  </a>
</p>

<h3 align="center">A collection of freely available React.js UI components by Maincode!</h3>
<p align="center">Build as a mobile first, batteries included extension for <a href="https://github.com/ionic-team/ionic-framework">Ionic Framework</a> apps.</p>
<p align="center"><a href="https://maincode-org.github.io/maincode-ui/"><strong>></strong> View demo and documentation page</a></p>
<br />

<p align="center">
  <a href="https://www.npmjs.org/package/strapi">
    <img src="https://img.shields.io/npm/v/maincode-ui/latest.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.org/package/strapi">
    <img src="https://img.shields.io/npm/dm/maincode-ui.svg" alt="Monthly download on NPM" />
  </a>
</p>

---

**Maincode UI** strives to deliver quickly integrated components to supplement **Ionic** or **other React.js** applications. It is..

- **Simplistic but customizable**. The components are high level and include several sub-components. It trades some customization for less development time. We gradually expand our use-case support.

- **Not a complete UI library**. For a complete collection of lower level components, please see the Ionic Framework [component library](https://ionicframework.com/docs/components). Your **Maincode UI** theming will automatically theme any Ionic component!

- **An Ionic extension**. It provides utilities for some things which are usually difficult in Ionic apps, such as our **dark mode context** and **scrollbar styling** helper.

## Getting Started

<a href="https://maincode-org.github.io/maincode-ui/QuickStart" target="_blank">Read the Getting Started tutorial</a> or follow the steps below:

### ⏳ Installation

```bash
npm install --save maincode-ui
```

### 🎉 Usage

For usage on all components, please see the <a href="https://maincode-org.github.io/maincode-ui/Overview">complete component documentation.</a>

> **!Note** that the stylesheets need only be imported once for each app, not for every component.

```tsx
import React from 'react';
import { CopyArea } from 'maincode-ui';

/** Maincode UI stylesheets. */
import 'maincode-ui/dist/index.css'; // All the component specific styles.
import 'maincode-ui/styles/theme.css'; // The default theme variables. See the "themes" section for customization.
import 'maincode-ui/styles/generics.css'; // A subset of tailwind classes (eg. "text-white"), and a few custom classes.

const ExampleApp: React.FC = () => {
  return <CopyArea command={'npm install maincode-ui'} />;
};
```

### Theming

The `maincode-ui/styles/theme.css` file provides a base theme. To customize the theme you can overwrite relevant CSS variables. We generally use the **Ionic theme** variable names, with a few **Maincode UI** additions.

To do this, create a new `theme.css` file, and apply assign values to the CSS variables described in the Ionic documentation [here.](https://ionicframework.com/docs/theming/color-generator)

Besides the Ionic variables, we also provide the following Maincode UI specific variables:

### Dark mode

- theming, add .dark or .light to a selector to specify styling.

### Styling the scrollbar

It is normally difficult to apply scrollbar styles to Ionic applications [(see their issue)](https://github.com/ionic-team/ionic-framework/issues/17685).

We provide a helper to style the scrollbar from the following set of css theme variables:

...

We automatically call this helper on dark mode context changes, allowing for separate dark mode scrollbar styling.

## Development & contribution

...

### Getting started

```bash
npm install ...
```

### Library structure

What folders do what..
Which CSS file does what..

### Testing

.. How to run tests, what to cover in tests

## License

BSD 3-Clause License © [MarkKragerup](https://github.com/MarkKragerup)
