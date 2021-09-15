import React, { useEffect, useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styles from './live-code-editor.module.css';

type IProps = {
  className?: string;
  code?: string;
  scope?: { [key: string]: any };
  noInline: boolean;
};

const LiveCodeEditor: React.FC<IProps> = ({ className = '', code, scope, noInline }) => {
  const [color, setColor] = useState('red');
  useEffect(() => {
    setColor('blue');
    console.log(color);
  }, []);

  return (
    <LiveProvider className={`${className} theme-item-bg ${styles.liveProvider}`} code={code} scope={scope} noInline={noInline}>
      <div className={styles.liveWrapper}>
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
