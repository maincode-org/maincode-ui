import React, { useState } from 'react';
import styles from './copy-area.module.css';
import { clipboardOutline, checkmarkOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Tippy from '@tippyjs/react';

type IProps = {
  command: string;
};

const CopyArea: React.FC<IProps> = ({ command }) => {
  const copyText = 'Copy to clipboard';
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
      <div className={`${styles.container} flex flex-row justify-between items-center glass-bg w-full rounded p-15 text-left pointer`} onClick={onClickHandler}>
        <code>
          <span className={`${styles.dollarSign} mr-1 select-none`}>$</span>
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
