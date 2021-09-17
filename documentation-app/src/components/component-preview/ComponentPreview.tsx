import styles from './component-preview.module.css';
import { IDocumentationPage } from '../../helpers/structure';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';

type IProps = {
  componentPages: IDocumentationPage[];
};

const ComponentPreview: React.FC<IProps> = ({ componentPages }) => (
  <IonGrid className={styles.grid}>
    <IonRow>
      {[...componentPages, ...componentPages].map((c, i) => (
        <IonCol key={i} className='mb-1' size='12' size-md='6' size-lg='6' size-xl='4'>
          <IonCard key={i} className={`${styles.card} theme-border shadow-lg`}>
            <IonCardHeader className={styles.cardHeader}>
              {c.preview?.picture && !c.preview?.element && <div className={`${styles.image} ${styles.previewArea}`} style={{ backgroundImage: `url('${c.preview.picture}')` }} />}
              {c.preview?.element && <div className={`${styles.previewArea} ${styles.previewElement} theme-bg`}>{c.preview.element}</div>}
              <IonCardTitle className={styles.title}>{c.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className={styles.teaserText}>{c.preview?.description}</IonCardContent>
          </IonCard>
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
);
export default ComponentPreview;
