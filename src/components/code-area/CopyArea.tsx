import React from 'react';
import styles from './copy-area.module.css';
import { clipboardOutline, clipboardSharp } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

type IProps = {
  command: string;
  theme: 'dark' | 'light';
};

const CopyArea: React.FC<IProps> = ({ command, theme }) => {
  let tooltipText = 'Copy to clipboard';

  const onClickHandler = () => {
    navigator.clipboard.writeText(command);
    tooltipText = 'Copied';
  };

  return (
    <Tooltip theme={theme} title={tooltipText} position='top-end'>
      <div className={`${styles.container} flex flex-row justify-between items-center glass-bg w-full rounded p-15 text-left pointer`} onClick={onClickHandler}>
        <code>
          <span className={`${styles.dollarSign} mr-1 select-none`}>$</span>
          {command}
        </code>
        <button className={`${styles.copyButton} rounded-sm transparent`}>
          <IonIcon className='w-full h-full' ios={clipboardOutline} md={clipboardSharp} />
        </button>
      </div>
    </Tooltip>
  );
};
export default CopyArea;
