import { useState } from 'react';
import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { colorPaletteOutline } from 'ionicons/icons';
import { IDocumentationPageContent, ParticleContainer } from 'maincode-ui';
import styles from './particle-container-doc.module.css';

const ParticleChangeDemo: React.FC = () => {
  const [bgImg, setBgImg] = useState(styles.bgRedBlue);
  const [paletteColor, setPaletteColor] = useState(styles.btnRedBlue);

  const handleImgChange = (bgImg: string, paletteColor: string) => {
    setBgImg(bgImg);
    setPaletteColor(paletteColor);
  };

  return (
    <>
      <IonFab vertical='center' horizontal='start' slot='fixed'>
        <IonFabButton className={paletteColor}>
          <IonIcon icon={colorPaletteOutline} />
        </IonFabButton>
        <IonFabList side='top'>
          <IonFabButton className={styles.btnRedBlue} onClick={() => handleImgChange(styles.bgRedBlue, styles.btnRedBlue)} />
          <IonFabButton className={styles.btnGreen} onClick={() => handleImgChange(styles.bgGreen, styles.btnGreen)} />
          <IonFabButton className={styles.btnIceBlue} onClick={() => handleImgChange(styles.bgIceBlue, styles.btnIceBlue)} />
          <IonFabButton className={styles.btnPink} onClick={() => handleImgChange(styles.bgPink, styles.btnPink)} />
        </IonFabList>
      </IonFab>
      <ParticleContainer className={`${styles.position} ${bgImg}`} />
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
