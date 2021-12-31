import { useState } from 'react';
import { IonButton, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { colorPaletteOutline, sparklesOutline, stopCircleOutline } from 'ionicons/icons';
import styles from './particle-control-demo.module.css';
import { ParticleContainer } from 'maincode-ui';

const ParticleControlDemo: React.FC = () => {
  const [bgImg, setBgImg] = useState(styles.bgGreen);
  const [paletteColor, setPaletteColor] = useState(styles.btnGreen);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  const handleImgChange = (bgImg: string, paletteColor: string) => {
    setBgImg(bgImg);
    setPaletteColor(paletteColor);
  };

  return (
    <div className='rounded pb-10 relative shadow-lg'>
      <div className='flex flex-col justify-between ml-8'>
        <IonFab className='relative mt-16'>
          <IonFabButton className={paletteColor}>
            <IonIcon icon={colorPaletteOutline} />
          </IonFabButton>
          <IonFabList side='end'>
            <IonFabButton className={styles.btnRedBlue} onClick={() => handleImgChange(styles.bgRedBlue, styles.btnRedBlue)} />
            <IonFabButton className={styles.btnIceBlue} onClick={() => handleImgChange(styles.bgIceBlue, styles.btnIceBlue)} />
            <IonFabButton className={styles.btnPink} onClick={() => handleImgChange(styles.bgPink, styles.btnPink)} />
            <IonFabButton className={styles.btnGreen} onClick={() => handleImgChange(styles.bgGreen, styles.btnGreen)} />
          </IonFabList>
        </IonFab>

        <IonFab className='relative mt-4'>
          <IonFabButton className={paletteColor} onClick={() => setIsAnimationEnabled(!isAnimationEnabled)}>
            <IonIcon icon={isAnimationEnabled ? stopCircleOutline : sparklesOutline} />
          </IonFabButton>
        </IonFab>
      </div>
      <div className={`${styles.header} w-full absolute shadow-md thin-glass-bg`}>
        <IonButton className={`mr-4 ${paletteColor}`}>Login</IonButton>
      </div>

      <div className={`${styles.card} thin-glass-bg flex rounded shadow-lg items-center justify-center`}>
        <h1 className='p-8'>Maincode UI!</h1>
      </div>
      <ParticleContainer isAnimationEnabled={isAnimationEnabled} className={`${styles.position} ${bgImg} rounded shadow-2xl`} />
    </div>
  );
};
export default ParticleControlDemo;
