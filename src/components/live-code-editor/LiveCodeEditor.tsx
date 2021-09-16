import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styles from './live-code-editor.module.css';
import { clipboardOutline, checkmarkOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

type IProps = {
  className?: string;
  code?: string;
  scope?: { [key: string]: any };
  noInline?: boolean;
};

const LiveCodeEditor: React.FC<IProps> = ({ className = '', code = '', scope, noInline = false }) => {
  const [currentCode, setCurrentCode] = useState(code?.trim());
  const [copyIcon, setCopyIcon] = useState(clipboardOutline);

  const padCode = (code: string): string => `${code}\n`;

  const onCopyClick = () => {
    navigator.clipboard.writeText(currentCode);
    setCopyIcon(checkmarkOutline);
    setTimeout(() => setCopyIcon(clipboardOutline), 5000);
  };

  return (
    <LiveProvider className={`${className} ${styles.liveProvider}`} code={currentCode} scope={scope} noInline={noInline}>
      <div className={`${styles.liveWrapper} theme-shadow theme-border`}>
        <div className={`${styles.liveEditor} ${styles.column} theme-item-bg`}>
          <button onClick={onCopyClick} title='Copy code!' className={`${styles.copyButton} theme-item-bg theme-border rounded-sm`}>
            <IonIcon title='Copy code!' ios={copyIcon} md={copyIcon} />
          </button>
          <LiveEditor onChange={(val) => setCurrentCode(val)} code={padCode(currentCode)} />
          <LiveError className={styles.liveError} />
        </div>
        <LivePreview className={`${styles.livePreview} ${styles.column} theme-bg `} />
      </div>
    </LiveProvider>
  );
};
export default LiveCodeEditor;
