import React, { useContext, useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Language } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/github';
import CopyButton from '../copy-button/CopyButton';
import styles from './live-code-editor.module.css';
import { EThemeModes, ThemeContext } from 'contexts/theme';

type IProps = {
  code?: string;
  enablePreview?: boolean;
  scope?: { [key: string]: any };
  noInline?: boolean;
  language?: Language;
  className?: string;
};

const LiveCodeEditor: React.FC<IProps> = ({ code = '', language = 'jsx', enablePreview = true, scope, noInline = false, className = '' }) => {
  const [currentCode, setCurrentCode] = useState(code?.trim());
  const theme = useContext(ThemeContext);

  const padCode = (code: string): string => `${code}\n`;

  const activeTheme = theme?.themeName === EThemeModes.dark ? darkTheme : lightTheme;

  return (
    <LiveProvider
      language={language}
      theme={{ ...activeTheme, plain: { color: activeTheme.plain.color, backgroundColor: 'transparent' } }}
      disabled={!enablePreview}
      className={`${className} ${styles.liveProvider}`}
      code={currentCode}
      scope={scope}
      noInline={noInline}
    >
      <div className={`${className} ${styles.liveWrapper} theme-shadow theme-item-bg theme-border`}>
        <div className={`${styles.liveEditor} ${enablePreview ? styles.column : 'w-full h-full'} theme-item-bg`}>
          <CopyButton code={currentCode} />
          <LiveEditor onChange={(val) => setCurrentCode(val)} code={padCode(currentCode)} />
        </div>

        {enablePreview && (
          <div className={`${styles.column} ${styles.rightWrapper} relative theme-bg`}>
            <LivePreview className={`${styles.livePreview}`} />

            <LiveError className={styles.liveError} />
          </div>
        )}
      </div>
    </LiveProvider>
  );
};
export default LiveCodeEditor;

export const jsxExample = `
const Wrapper = ({ children }) => (
  <div style={{
    background: 'rgba(100, 100, 100, 0.1)',
    width: '90%',
    padding: '2rem',
    margin: 'auto'
  }}>
    {children}
  </div>
)

const Title = () => (
  <h3 style={{ color: 'palevioletred' }}>
    Hello World!
  </h3>
)

render(
  <Wrapper>
    <Title />
  </Wrapper>
)
`;
