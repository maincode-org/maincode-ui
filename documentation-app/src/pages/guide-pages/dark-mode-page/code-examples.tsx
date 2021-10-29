export const darkModeClassesExample = `body.dark,
.ios body.dark,
.md body.dark {
  --ion-text-color: #bdbddd;
  --ion-color-primary: #dd7500 !important;
  ...;
}`;

export const darkModeExample = `import { ThemeContext } from 'maincode-ui';

//> stylesheets and other imports omitted for brievity..

const App: React.FC = () => {
  const theme = useContext(ThemeContext);

  return <div className={theme?.themeName}>My app</div>;
};`;

export const contextWrapExample = `ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);`;

export const themeContextExample = `import { ThemeContext } from 'maincode-ui';

const App: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme?.themeName}>
      <h1>my {theme?.themeName} mode app!</h1>
      <button onClick={theme?.toggleTheme}>Toggle light/dark mode</button>
    </div>
  );
};`;
