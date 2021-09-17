import React, { useState } from 'react';
import styles from './copy-button.module.css';
import { IonIcon } from '@ionic/react';
import { checkmarkOutline, clipboardOutline } from 'ionicons/icons';

type IProps = {
  code?: string;
};

const CopyButton: React.FC<IProps> = ({ code }) => {
  const [icon, setIcon] = useState(clipboardOutline);

  const onCopyClick = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setIcon(checkmarkOutline);
    setTimeout(() => setIcon(clipboardOutline), 5000);
  };

  return (
    <button onClick={onCopyClick} className={`${styles.copyButton} theme-item-bg theme-border rounded-sm`}>
      <IonIcon className={styles.icon} ios={icon} md={icon} />
    </button>
  );
};
export default CopyButton;
