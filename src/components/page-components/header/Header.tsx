import React, { useContext } from 'react';
import { IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { EThemeModes, ThemeContext } from 'contexts/theme';
import { logoGithub, moonOutline, moonSharp, sunnyOutline, sunnySharp } from 'ionicons/icons';
import styles from './header.module.css';

type IProps = {
  title?: string;
  githubURL?: string;
  themeController?: {
    currentTheme: 'light' | 'dark';
    toggleTheme: () => void;
  };
  className?: string;
};

const Header: React.FC<IProps> = ({ title, githubURL, className }) => {
  const theme = useContext(ThemeContext);
  return (
    <IonHeader className={`${className} ${styles.header}`}>
      <IonToolbar className='flex flex-col'>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        <IonTitle className='flex flex-col p-1'>
          {title && title}
          <div className='ion-float-end mr-1'>
            <IonIcon
              className='mr-1 pointer'
              onClick={theme?.toggleTheme}
              ios={theme?.themeName === EThemeModes.light ? moonOutline : sunnyOutline}
              md={theme?.themeName === EThemeModes.light ? moonSharp : sunnySharp}
            />
            {githubURL && (
              <a href={githubURL} className='color-fg'>
                <IonIcon className='pointer' ios={logoGithub} md={logoGithub} />
              </a>
            )}
          </div>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
