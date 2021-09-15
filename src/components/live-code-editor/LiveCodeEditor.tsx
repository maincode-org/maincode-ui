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

const LiveCodeEditor: React.FC<IProps> = ({ className = '', code, scope, noInline = false }) => {
  const [copyIcon, setCopyIcon] = useState(clipboardOutline);

  const onCopyClick = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopyIcon(checkmarkOutline);

    setTimeout(() => {
      setCopyIcon(clipboardOutline);
    }, 5000);
  };

  return (
    <LiveProvider className={`${className} theme-item-bg ${styles.liveProvider}`} code={code} scope={scope} noInline={noInline}>
      <div className={styles.liveWrapper}>
        <button onClick={() => onCopyClick()}>
          <IonIcon ios={copyIcon} md={copyIcon} />
        </button>
        <div className={`${styles.liveEditor} ${styles.column}`}>
          <LiveEditor />
          <LiveError className={styles.liveError} />
        </div>
        <LivePreview className={`${styles.livePreview} ${styles.column}`} />
      </div>
    </LiveProvider>
  );
};
export default LiveCodeEditor;
