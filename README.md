<p align="center">
  <a href="https://maincode-org.github.io/maincode-ui/">
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
applications. It is:

- **Simplistic but customizable**. The components are high level and include several sub-components. It trades some
  customization for less development time. We gradually expand our use-case support.

- **Not a complete UI library**. For a complete collection of lower level components, please see the Ionic
  Framework [component library](https://ionicframework.com/docs/components). Your **Maincode UI** theming will
  automatically theme any Ionic component!

- **Usable with most React.js frameworks**. The components even support server side rendering in Next.js with the use of dynamic imports.

- **An Ionic extension**. It provides utilities for some things which are usually difficult in Ionic apps, such as
  our **dark mode context** and **scrollbar styling** helper.

## Getting Started

<a href="https://maincode-org.github.io/maincode-ui/quick-start" target="_blank">Read the Getting Started tutorial</a> or
follow the steps below:

> **!Note** that the library is currently not compatible with **React v. 17+**, due to the [React Live v. 2.3.0](https://github.com/FormidableLabs/react-live) library's incompatibility with **React v. > 16.14**.
> We will upgrade the version as soon as possible and have opened an [issue](https://github.com/maincode-org/maincode-ui/issues/53) which can be monitored for updates.

### ⏳ Installation

```bash
npm install --save maincode-ui
```

### 🎉 Usage

For usage on all components, please see the [complete
component documentation.](https://maincode-org.github.io/maincode-ui/overview)

The code below is the minimum needed to get started with a <b>Maincode UI</b> app, and spawning a [CopyArea](https://maincode-org.github.io/maincode-ui/copy-area) component identical to the first command on this page.

> **!Note** that the stylesheets need only be imported once for each app, not for every component.

```tsx
import React from 'react';
import { CopyArea } from 'maincode-ui';

// > Ionic styles omitted for breviety..

/** Maincode UI stylesheets. */
import 'maincode-ui/dist/index.css'; // All the component specific styles.
import 'maincode-ui/styles/theme.css'; // The default theme variables. See the "themes" section for customization.
import 'maincode-ui/styles/tail-generics.css'; // A subset of tailwind classes (eg. "text-white").
import 'maincode-ui/styles/generics.css'; // A few common classes be Maincode (eg. "glass-bg").

const ExampleApp: React.FC = () => {
  return <CopyArea command={'npm install --save maincode-ui'} />;
};
```

The app will also need most of the styling from Ionic as well to work correctly. Add the [Ionic style imports](https://ionicframework.com/docs/layout/global-stylesheets) at the indicated location in the above example. The imports are:

```tsx
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

### Theming

The `maincode-ui/styles/theme.css` file provides a base theme. To customize the theme you can overwrite relevant CSS
variables. We generally use the **Ionic theme** variable names, with a few **Maincode UI** additions.

To do this, create a new `theme.css` file, and assign values to the CSS variables described in the [Ionic
documentation.](https://ionicframework.com/docs/theming/color-generator)

Besides the Ionic variables, we also provide the Maincode UI specific variables described in our [theming documentation](https://maincode-org.github.io/maincode-ui/theming).

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
>
> `--code-background-color` which modifies the background color of the `code` HTML element.

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

> **!Note** that this helper is called automatically when the `ThemeContext` changes, allowing for separate dark mode scrollbar styling. If you are using our `ThemeContext`, you don't have to import the script.

The look of the scrollbar can be modified as described in our [theming documentation](https://maincode-org.github.io/maincode-ui/theming).

FOR WEBSITE----
The look of the scrollbar can be modified in your `theme.css` file through the following set of CSS theme variables:

> `--scroll-color` which modifies the default color of the scrollbar thumb.
>
> `--scroll-color-hover` which modifies the color of the scrollbar thumb on hover.
>
> `--scroll-color-active` which modifies the color of the scrollbar while pressed.

### Dark mode

The library provides a context `ThemeContext` to manage and apply the dark and light mode themes.

Enable it by applying the context on the root element of your app as shown below.

```tsx
import { ThemeContext } from 'maincode-ui';

//> stylesheets and other imports omitted for brievity..

const App: React.FC = () => {
  const theme = useContext(ThemeContext);

  return <div className={theme?.themeName}>my app!</div>;
};
```

And wrap the app in the ThemeProvider for the context as shown below.

```tsx
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

Alternatively, the dark mode of the library components can be partially controlled by toggling the classnames `"light"` and `"dark"` on the `body` element.

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

This approach allows you to use variables like `--ion-text-color` in your app, and have the targeted element automatically adapt to dark
mode.

#### Setting and reading dark mode manually

The provided `ThemeContext` allows you to toggle and read the state of the app theme. This is useful when making "toggle"
buttons for dark mode, or adapting components dynamically based on theme changes.

It can be used as shown in the example below:

```tsx
import { ThemeContext } from 'maincode-ui';

const MyComponent: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1>my {theme?.themeName} mode component!</h1>
      <button onClick={theme?.toggleTheme}> toggle light/dark mode for the entire app</button>
    </div>
  );
};
```

> **!Note** that the `ThemeContext` also sets the mode in the browsers `localStorage` under the `themeName` key, automatically saving the clients' selected theme and loading it by default on future visits.

### Styling system

Maincode UI offer a lot of styling through pre-defined classnames.

- This is entirely inspired by **Tailwind CSS** and can be seen as a less advanced subset of Tailwind.

- It can be exchanged for **Tailwind CSS** if you want additional classnames or smart functionality such as purging.

- In case you are using **Tailwind CSS**, you don't have to import our tail-generics.

Here is an example of how to utilize the generic classes when styling and layouting your app!

```jsx
<div className='flex flex-col p-1 glass-bg rounded shadow-md'>
  <p className='bold'>A bold styled p</p>
  <p className='color-bg'>Another styled p</p>
</div>
```

### Contributing

Like this project?

<a href="https://www.buymeacoffee.com/maincode" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Us A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

We always like to participate in interesting projects, and we love to help you overcome any difficulties with our library.

If you have feedback or would like to work with is, please don't hesitate to contact us at mark@maincode.dk or mhn@maincode.dk

### Extending the code base

Please see the development details below to get started with the code base.

#### Setting up

The repository contains two things. The UI library's modules in the root, and the documentation react app in the `/documentation-app` folder

To get started, first run `npm install` in both folders.

Run `npm start` in the root folder to actively recompile the library code on changes. Run the same command in the documentation app to launch the app and listen to library component changes with live reloading.

#### Library structure

Please notice how the logic is grouped in the following folder structure:

`/styles` contain the different stylesheets with their own logical CSS overwrites. See the usage example for an explanation on the difference.

`/src/components` contains sub-folders for each **category** of components offered in the library, and another level of sub-folders for each component in the category.

`/documentation-app/src/pages` contain all the documentation content for each component. Please keep this updated when contributing new components.

`/documentation-app/src/structure` assembles all the documentation pages into our navigation, route and layout generators. Documentation entries must be added here to appear in the webapp.

### Testing

To run tests, use `npm run test`.

The source for the tests are located in the `/tests` directory.

The tests should cover at least all exposed methods in the toolkits.

### License

BSD 3-Clause License © [MarkKragerup](https://github.com/MarkKragerup)
