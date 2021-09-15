import React from 'react';
import styles from './copy-area.module.css';
import { clipboardOutline, clipboardSharp } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

type IProps = {
  command: string;
};

const CopyArea: React.FC<IProps> = ({ command }) => {
  return (
    <Tippy content={<span>Copy to clipboard</span>}>
      <div className={`${styles.container} flex flex-row justify-between items-center glass-bg w-full rounded p-15 text-left pointer`} onClick={() => navigator.clipboard.writeText(command)}>
        <code>
          <span className={`${styles.dollarSign} mr-1 select-none`}>$</span>
          {command}
        </code>
        <button className={`${styles.copyButton} rounded-sm transparent`}>
          <IonIcon className='w-full h-full' ios={clipboardOutline} md={clipboardSharp} />
        </button>
      </div>
    </Tippy>
  );
};
export default CopyArea;
