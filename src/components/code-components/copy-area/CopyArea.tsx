import React, { useState } from 'react';
import styles from './copy-area.module.css';
import { clipboardOutline, checkmarkOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Tippy from '@tippyjs/react';

type IProps = {
  command: string;
  tooltip?: string;
  className?: string;
};

const CopyArea: React.FC<IProps> = ({ command, tooltip = 'Copy to clipboard', className = '' }) => {
  const copyText = tooltip;
  const [tooltipText, setTooltipText] = useState(copyText);
  const [clipboardIcon, setClipboardIcon] = useState(clipboardOutline);

  const onClickHandler = () => {
    navigator.clipboard.writeText(command);
    setTooltipText('✓ Copied');
    setClipboardIcon(checkmarkOutline);

    setTimeout(() => {
      setTooltipText(copyText);
      setClipboardIcon(clipboardOutline);
    }, 5000);
  };

  return (
    <Tippy className='tippy' hideOnClick={false} content={tooltipText} placement='top'>
      <div className={`${className} ${styles.container} theme-border flex flex-row justify-between items-center glass-bg w-full rounded p-4 text-left cursor-pointer`} onClick={onClickHandler}>
        <code className='transparent'>
          <span className={`${styles.dollarSign} mr-4 select-none`}>$</span>
          {command}
        </code>
        <button className={`${styles.copyButton} rounded-sm transparent`}>
          <IonIcon className='w-full h-full' ios={clipboardIcon} md={clipboardIcon} />
        </button>
      </div>
    </Tippy>
  );
};
export default CopyArea;
