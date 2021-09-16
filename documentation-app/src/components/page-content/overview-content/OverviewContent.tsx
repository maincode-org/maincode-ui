import styles from './overview-content.module.css';
import { componentPages } from '../../../helpers/structure';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

const OverviewContent = () => {
  return (
    <div className='flex flex-row'>
      {componentPages.map((c) => (
        <IonCard className={styles.card}>
          <IonCardHeader>
            <img className={styles.image} alt={c.title + 'image'} src='https://i.picsum.photos/id/12/500/500.jpg?hmac=eDPFWf-MrW9y-NrkWpEFk3Ogo9qpZ985kimtQNMNm94' />
            <IonCardTitle className={styles.title}>{c.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent className={styles.teaserText}>{c.preview?.description}</IonCardContent>
        </IonCard>
      ))}
    </div>
  );
};
export default OverviewContent;
