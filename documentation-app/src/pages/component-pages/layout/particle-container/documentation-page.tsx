import { IDocumentationPageContent, ParticleContainer } from 'maincode-ui';
import styles from './particle-container-doc.module.css';

export const particleContainerDocumentation: IDocumentationPageContent = {
  customContent: (
    <>
      <ParticleContainer className={`${styles.position} ${styles.bgImgRedBlue}`}>
        <h3>Test</h3>
      </ParticleContainer>
    </>
  ),
};
