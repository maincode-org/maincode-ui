import { IDocumentationPageContent, ParticleContainer } from 'maincode-ui';
import styles from './particle-container-doc.module.css';
import { useState } from 'react';

const ParticleChangeDemo: React.FC = () => {
  const [bgImg, setBgImg] = useState(styles.bgImgRedBlue);
  return (
    <>
      <h3>Test</h3>
      <button onClick={() => setBgImg(bgImg === styles.bgImgRedBlue ? styles.bgImGreen : styles.bgImgRedBlue)}>Change bg</button>
      <ParticleContainer className={`${styles.position} ${bgImg}`}></ParticleContainer>
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
