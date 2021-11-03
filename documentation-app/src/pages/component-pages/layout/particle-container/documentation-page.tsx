import { useState } from 'react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { colorPaletteOutline, stopCircleOutline, sparklesOutline } from 'ionicons/icons';
import { IDocumentationPageContent, ParticleContainer } from 'maincode-ui';
import styles from './particle-container-doc.module.css';

const ParticleChangeDemo: React.FC = () => {
  const [bgImg, setBgImg] = useState(styles.bgRedBlue);
  const [paletteColor, setPaletteColor] = useState(styles.btnRedBlue);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  const handleImgChange = (bgImg: string, paletteColor: string) => {
    setBgImg(bgImg);
    setPaletteColor(paletteColor);
  };

  return (
    <>
      <div className='flex flex-col justify-between'>
        <IonFab className='relative mt-2'>
          <IonFabButton className={paletteColor}>
            <IonIcon icon={colorPaletteOutline} />
          </IonFabButton>
          <IonFabList side='end'>
            <IonFabButton className={styles.btnRedBlue} onClick={() => handleImgChange(styles.bgRedBlue, styles.btnRedBlue)} />
            <IonFabButton className={styles.btnGreen} onClick={() => handleImgChange(styles.bgGreen, styles.btnGreen)} />
            <IonFabButton className={styles.btnIceBlue} onClick={() => handleImgChange(styles.bgIceBlue, styles.btnIceBlue)} />
            <IonFabButton className={styles.btnPink} onClick={() => handleImgChange(styles.bgPink, styles.btnPink)} />
          </IonFabList>
        </IonFab>

        <IonFab className='relative mt-1'>
          <IonFabButton className={paletteColor} onClick={() => setIsAnimationEnabled(!isAnimationEnabled)}>
            <IonIcon icon={isAnimationEnabled ? stopCircleOutline : sparklesOutline} />
          </IonFabButton>
        </IonFab>
      </div>
      <ParticleContainer isAnimationEnabled={isAnimationEnabled} className={`${styles.position} ${bgImg}`} />
    </>
  );
};

export const particleContainerDocumentation: IDocumentationPageContent = {
  customContent: (
    <>
      <ParticleChangeDemo />
    </>
  ),
};
