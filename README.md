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

- **Not a complete UI library**. ... .
- **Simplistic but customizable**. ... .
- **A Ionic extension**. ... .

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
import React, { Component } from 'react';

import MyComponent from 'maincode-ui';

/** Maincode UI stylesheets */
import 'maincode-ui/dist/index.css'; // All the component specific styles.
import 'maincode-ui/dist/theme.css'; // The default theme variables. See the "themes" section for customization.
import 'maincode-ui/dist/generics.css'; // A subset of tailwind classes (eg. "text-white"), and a few custom classes.
import '...'; // Optional -

const Example: React.FC = () => {
  return <MyComponent />;
};
```

### Theming

#### Dark mode

- theming, add .dark or .light to a selector to specify styling.

**Styling the scrollbar..**

https://github.com/ionic-team/ionic-framework/issues/17685#issuecomment-587633556

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
