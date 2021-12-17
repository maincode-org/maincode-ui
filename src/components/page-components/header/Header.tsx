import React, { useContext } from 'react';
import { IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import { logoGithub, moonSharp, sunnySharp } from 'ionicons/icons';
import styles from './header.module.css';

type IProps = {
  title?: string;
  githubURL?: string;
  versionLabel?: string;
  className?: string;
};

const Header: React.FC<IProps> = ({ title, githubURL, versionLabel, className }) => {
  const theme = useContext(ThemeContext);
  return (
    <IonHeader className={`${className} ${styles.header}`}>
      <IonToolbar className='flex flex-col'>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle className='flex flex-col flex-wrap p-1 pl-05'>
          {title && <span className={`${styles.title} mb-05 truncate`}>{title}</span>}
          <div className={`${styles.icons}`}>
            <IonIcon
              className='mr-05 pointer'
              onClick={theme?.toggleTheme}
              ios={theme?.themeName === EThemeModes.light ? moonSharp : sunnySharp}
              md={theme?.themeName === EThemeModes.light ? moonSharp : sunnySharp}
            />
            {githubURL && (
              <a href={githubURL} className='color-fg'>
                <IonIcon className='pointer' ios={logoGithub} md={logoGithub} />
              </a>
            )}
            {versionLabel && (
              <div className='h-full inline'>
                <span className={`${styles.version} inline ml-05 `}>v. {versionLabel}</span>
              </div>
            )}
          </div>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
