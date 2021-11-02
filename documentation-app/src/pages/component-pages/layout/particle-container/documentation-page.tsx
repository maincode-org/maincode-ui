import { useMemo, useState } from 'react';
import { IDocumentationPageContent, ParticleContainer } from 'maincode-ui';
import styles from './particle-container-doc.module.css';
import { IonButton } from '@ionic/react';
const backgrounds = [styles.bgRedBlue, styles.bgGreen, styles.bgIceBlue, styles.bgPink];

const ParticleChangeDemo: React.FC = () => {
  const [bgIndex, setBGIndex] = useState(0);
  const bgImg = useMemo(() => backgrounds[bgIndex % backgrounds.length], [bgIndex]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleImgChange = () => {
    setBGIndex(bgIndex + 1);
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 1500);
  };

  return (
    <>
      <IonButton disabled={isButtonDisabled} onClick={handleImgChange}>
        Click me! ☕
      </IonButton>
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
