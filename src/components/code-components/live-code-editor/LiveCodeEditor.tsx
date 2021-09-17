import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styles from './live-code-editor.module.css';
import darkTheme from 'prism-react-renderer/themes/oceanicNext';
import lightTheme from 'prism-react-renderer/themes/github';
import CopyButton from '../copy-button/CopyButton';

type IProps = {
  code?: string;
  enablePreview?: boolean;
  scope?: { [key: string]: any };
  noInline?: boolean;
  isDarkMode: boolean;
  className?: string;
};

const LiveCodeEditor: React.FC<IProps> = ({ className = '', code = '', enablePreview = true, scope, isDarkMode, noInline = false }) => {
  const [currentCode, setCurrentCode] = useState(code?.trim());

  const padCode = (code: string): string => `${code}\n`;

  const activeTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <LiveProvider
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
    padding: '2rem'
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
