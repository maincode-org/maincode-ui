import styles from './component-preview.module.css';
import { IDocumentationPage, urlPrefix } from '../../structure/assembly';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { openOutline, openSharp } from 'ionicons/icons';
import { Link } from 'react-router-dom';

type IProps = {
  componentPages: IDocumentationPage[];
};

const ComponentPreview: React.FC<IProps> = ({ componentPages }) => (
  <IonGrid className={styles.grid}>
    <IonRow>
      {[...componentPages].map((c, i) => (
        <IonCol key={i} className='mb-1' size='12' size-md='6' size-lg='6' size-xl='4'>
          <IonCard key={i} className={`${styles.card} theme-border shadow-lg`}>
            <IonCardHeader className={styles.cardHeader}>
              {c.preview?.picture && !c.preview?.element && (
                <Link to={`${urlPrefix}${c.url}`}>
                  <div className={`${styles.image} ${styles.previewArea}`} style={{ backgroundImage: `url('${c.preview.picture}')` }} />
                </Link>
              )}
              {c.preview?.element && <div className={`${styles.previewArea} ${styles.previewElement} theme-bg p-1`}>{c.preview.element}</div>}
            </IonCardHeader>
            <Link className={styles.link} to={`${urlPrefix}${c.url}`}>
              <div className={styles.descriptionArea}>
                <IonCardTitle className={styles.title}>
                  {c.title}
                  <IonIcon className={styles.openIcon} ios={openOutline} md={openSharp} />
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
export default ComponentPreview;
