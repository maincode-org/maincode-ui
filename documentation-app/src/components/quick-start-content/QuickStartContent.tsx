import { useContext } from 'react';
import { CopyArea } from 'maincode-ui';
import { ThemeContext } from '../../contexts/theme';

const QuickStartContent = () => {
  const theme = useContext(ThemeContext);

  return <CopyArea command='npm i -D maincode-ui' theme={theme?.themeName ?? 'dark'} />;
};
export default QuickStartContent;
