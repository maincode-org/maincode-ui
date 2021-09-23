import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styles from './live-code-editor.module.css';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import CopyButton from '../copy-button/CopyButton';
import { Language } from 'prism-react-renderer';

type IProps = {
  code?: string;
  enablePreview?: boolean;
  scope?: { [key: string]: any };
  noInline?: boolean;
  isDarkMode: boolean;
  className?: string;
  language?: Language;
};

const LiveCodeEditor: React.FC<IProps> = ({ className = '', code = '', language = 'jsx', enablePreview = true, scope, isDarkMode, noInline = false }) => {
  const [currentCode, setCurrentCode] = useState(code?.trim());

  const padCode = (code: string): string => `${code}\n`;

  const activeTheme = isDarkMode ? darkTheme : lightTheme;

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
      <div className={`${styles.liveWrapper} theme-shadow theme-item-bg theme-border`}>
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
