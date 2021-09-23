import styles from './component-preview.module.css';
import { IDocumentationPage, urlPrefix } from 'structure/assembly';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { openOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext, EThemeModes } from 'maincode-ui';

type IProps = {
  componentPages: IDocumentationPage[];
};

const ComponentPreview: React.FC<IProps> = ({ componentPages }) => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.themeName === EThemeModes.dark;

  const getPictureURL = (c: IDocumentationPage, isDarkMode: boolean) => (isDarkMode && c.preview?.darkModePicture ? c.preview.darkModePicture : c.preview?.picture);

  return (
    <IonGrid className={styles.grid}>
      <IonRow>
        {[...componentPages].map((c, i) => (
          <IonCol key={i} size='12' size-md='6' size-lg='6' size-xl='4'>
            <IonCard key={i} className={`${styles.card} theme-border shadow-lg`}>
              <IonCardHeader className={styles.cardHeader}>
                {c.preview?.picture && !c.preview?.element && (
                  <Link to={`${urlPrefix}${c.url}`}>
                    <div className={`${styles.image} ${styles.previewArea}`} style={{ backgroundImage: `url('${getPictureURL(c, isDarkMode)}')` }} />
                  </Link>
                )}
                {c.preview?.element && <div className={`${styles.previewArea} ${styles.previewElement} p-1 theme-bg`}>{c.preview.element}</div>}
              </IonCardHeader>
              <Link className={styles.link} to={`${urlPrefix}${c.url}`}>
                <div className={styles.descriptionArea}>
                  <IonCardTitle className={styles.title}>
                    {c.title}
                    <IonIcon className={styles.openIcon} ios={openOutline} md={openOutline} />
                  </IonCardTitle>
                  <IonCardContent className={styles.teaserText}>{c.description}</IonCardContent>
                </div>
              </Link>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
export default ComponentPreview;
