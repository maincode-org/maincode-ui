import { useContext } from 'react';
import { LiveCodeEditor, IComponentUsage, EThemeModes, ThemeContext } from 'maincode-ui';

type IProps = {
  codeExamples: IComponentUsage[];
};

const LiveCodeEditorContextWrapper: React.FC<IProps> = ({ codeExamples }) => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext?.themeName === EThemeModes.dark;

  return (
    <>
      {codeExamples.map((example, i) => (
        <div key={i}>
          {example.title && <h3>{example.title}</h3>}
          {example.description && <p>{example.description}</p>}
          <LiveCodeEditor code={example.code} isDarkMode={isDarkMode} enablePreview={example.enablePreview} noInline={example.noInline} scope={example.scope} />
        </div>
      ))}
    </>
  );
};
export default LiveCodeEditorContextWrapper;
