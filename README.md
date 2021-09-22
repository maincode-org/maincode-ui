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

**Maincode UI** strives to deliver quickly integratable components to supplement **Ionic** or **other React.js**
applications. It is..

- **Simplistic but customizable**. The components are high level and include several sub-components. It trades some
  customization for less development time. We gradually expand our use-case support.

- **Not a complete UI library**. For a complete collection of lower level components, please see the Ionic
  Framework [component library](https://ionicframework.com/docs/components). Your **Maincode UI** theming will
  automatically theme any Ionic component!

- **An Ionic extension**. It provides utilities for some things which are usually difficult in Ionic apps, such as
  our **dark mode context** and **scrollbar styling** helper.

## Getting Started

<a href="https://maincode-org.github.io/maincode-ui/QuickStart" target="_blank">Read the Getting Started tutorial</a> or
follow the steps below:

### ⏳ Installation

```bash
npm install --save maincode-ui
```

### 🎉 Usage

For usage on all components, please see the <a href="https://maincode-org.github.io/maincode-ui/Overview">complete
component documentation.</a>

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

The `maincode-ui/styles/theme.css` file provides a base theme. To customize the theme you can overwrite relevant CSS
variables. We generally use the **Ionic theme** variable names, with a few **Maincode UI** additions.

To do this, create a new `theme.css` file, and assign values to the CSS variables described in the Ionic
documentation [here.](https://ionicframework.com/docs/theming/color-generator)

Besides the Ionic variables, we also provide the Maincode UI specific variables described in our [theming documentation](https://maincode-org.github.io/maincode-ui/Theming).

FOR WEBSITE: -------------
Besides the Ionic variables, we also provide the following Maincode UI specific variables:

> `--text-color-alt` which modifies alternative texts such as sub-headers, which deviate from the --ion-text-color.
>
> `--border-color` which modifies the border color set on Maincode UI components.
>
> `--color-glass` which modifies the coloring of elements with the glassy background effects.
>
> `--border-glass` which modifies the supplementary border color for elements with the glassy background effect.
>
> `--shadow` which modifies the theme-shadow. This is used on selective Maincode UI elements.
>
> `--card-shadow` which modifies the custom card shadow. This is used on Maincode UI cards only.

#### Styling the scrollbar

It is normally difficult to apply scrollbar styles to Ionic applications [(see their issue)](https://github.com/ionic-team/ionic-framework/issues/17685).

We provide a helper to style the scrollbar. It can be used after the app is mounted:

```tsx
import React, { useEffect } from 'react';
import styleScrollbar from 'maincode-ui';

const App: React.FC = () => {
  useEffect(() => {
    styleScrollbar();
  }, []);

  return <p>Some app</p>;
};
```

> **!Note** that this helper is called automatically dark mode context changes, allowing for separate dark mode scrollbar styling. If you use the dark mode context, you dont have to import the script.

The look of the scrollbar can be modified in your `theme.css` file through the following set of CSS theme variables:

> `--scroll-color` modifies the default color of the scrollbar thumb.
>
> `--scroll-color-hover` modifies the color of the scrollbar thumb on hover.
>
> `--scroll-color-active` modifies the color of the scrollbar while pressed.

### Dark mode

Enabling dark mode.. (use context on app). TBA

You can customize your dark mode theme by setting values for any CSS variable in your custom theme file.

The variables must be on the `body.dark` element, and also apply for `.md body.dark` and `.ios body.dark` elements. The
reason is that dark mode is set as a classname on the `body` element with values `"light"` or `"dark"`.

```css
body.dark,
.ios body.dark,
.md body.dark {
  --ion-text-color: #bdbddd;
  --ion-color-primary: #dd7500 !important;
  ...;
}
```

This approach lets you use any variable, like `--ion-text-color` in your app, and have it automatically adapt to dark
mode.

#### Setting and reading dark mode manually

The provided theme context allows you to toggle and read the state of the app theme. This is useful when making "toggle"
buttons for dark mode, or adapting components dynamically based on theme changes.

... example ...

### Styling system

Maincode UI offer a lot of styling through pre-defined classnames.

- This is entirely inspired by Tailwind CSS and can be seen as a less advanced subset of Tailwind.

- It can be exchanged for tailwind CSS if you want additional classnames or smart functionality such as purging.

- In case you use Tailwind, you don't have to import our generics.

> **!Note** that some specific classes, like `glass-bg` will be missing. We will split up Tailwind overwrites and our additions in the future. More information about this issue will follow.

Here is an example of how to utilize the generic classes when styling and layouting your app!

```jsx
...
```

## Development & contribution

...

### Getting started

```bash
npm install ...
```

### Library structure

What folders do what.. Which CSS file does what..

### Testing

.. How to run tests, what to cover in tests

## License

BSD 3-Clause License © [MarkKragerup](https://github.com/MarkKragerup)
