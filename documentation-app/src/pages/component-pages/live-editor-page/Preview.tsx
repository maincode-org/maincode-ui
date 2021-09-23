import { useContext } from 'react';
import { ThemeContext, EThemeModes } from 'maincode-ui';
import styles from './Preview.module.css';
import liveCodeEditorDark from 'assets/LiveCodeEdit-dark.png';
import liveCodeEditorLight from 'assets/LiveCodeEdit-light.png';

const Preview: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const pictureURL = themeContext?.themeName === EThemeModes.dark ? liveCodeEditorDark : liveCodeEditorLight;

  return <div className={`${styles.image} ${styles.previewArea}`} style={{ backgroundImage: `url('${pictureURL}')` }} />;
};
export default Preview;
