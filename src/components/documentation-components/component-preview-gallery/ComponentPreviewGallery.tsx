import React from 'react';
import { Link } from 'react-router-dom';
import styles from './component-preview-gallery.module.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { openOutline } from 'ionicons/icons';
import { useContext } from 'react';
import { ThemeContext, EThemeModes } from 'contexts/theme';
import { IDocumentationPage } from '../types';

type IComponentPage = {
  title: string;
  pages: IDocumentationPage[];
};

type IProps = {
  componentPages: IComponentPage[];
  className?: string;
};

const ComponentPreviewGallery: React.FC<IProps> = ({ componentPages, className = '' }) => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.themeName === EThemeModes.dark;

  const getPictureURL = (c: IDocumentationPage, isDarkMode: boolean) => (isDarkMode && c.preview?.darkModePicture ? c.preview.darkModePicture : c.preview?.picture);

  return (
    <IonGrid className={`${className} ${styles.grid}`}>
      {componentPages.map((c, i) => (
        <div className='mb-3' key={i}>
          <h2>{`${c.title} components`}</h2>
          <div className={styles.hr} />
          <IonRow>
            {c.pages.map((p, i) => (
              <IonCol key={i} size='12' size-md='6' size-lg='6' size-xl='4' className='mb-15'>
                <IonCard key={i} className={`${styles.card} theme-border shadow-lg`}>
                  <IonCardHeader className={styles.cardHeader}>
                    {p.preview?.picture && !p.preview?.element && (
                      <Link className='decoration-none h-full' to={p.url}>
                        <div className={`${styles.image} ${styles.previewArea}`} style={{ backgroundImage: `url('${getPictureURL(p, isDarkMode)}')` }} />
                      </Link>
                    )}
                    {p.preview?.element && <div className={`${styles.previewArea} ${styles.previewElement} p-1 theme-bg`}>{p.preview.element}</div>}
                  </IonCardHeader>
                  <Link className='decoration-none h-full' to={p.url}>
                    <div className={styles.descriptionArea}>
                      <IonCardTitle className={styles.title}>
                        {p.title}
                        <IonIcon className={styles.openIcon} ios={openOutline} md={openOutline} />
                      </IonCardTitle>
                      <IonCardContent className={styles.teaserText}>{p.description}</IonCardContent>
                    </div>
                  </Link>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </div>
      ))}
    </IonGrid>
  );
};
export default ComponentPreviewGallery;
