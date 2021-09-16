import React from 'react';
import drawing from './Drawing';
import DocumentationSection, { IComponentUsage, IDocumentationPageContent, IPropertyDetail, IStyleDetail } from './components/documentation-components/documentation-section/DocumentationSection';
import { styleScrollbars } from './helpers/style-scrollbar';
import CopyArea from './components/copy-area/CopyArea';
import PagePaginationFooter, { IFooterNav } from './components/page-scroll-footer/PagePaginationFooter';
import InfoArea from './components/info-area/InfoArea';

import png from 'assets/cropped-robot.png'; // Path to img must not be relative "./".
import { IonButton } from '@ionic/react';
import LiveCodeEditor from './components/live-code-editor/LiveCodeEditor';

interface Props {
  text: string;
}

export const ExampleComponent: React.FC<Props> = ({ text }: Props) => {
  return (
    <div className={`glass-bg shadow-xl rounded`}>
      Example Component: {text}
      {drawing}
      <img src={png} height={200} width={200} alt='test' />
      <IonButton className='ion-float-end'>Primary Color</IonButton>
    </div>
  );
};

const jsxExample = `
<h3>
  Hello World!
</h3>
`.trim();

export const LiveEditExample: React.FC = () => <LiveCodeEditor noInline={false} code={jsxExample} scope={{ IonButton }} />;
export { PagePaginationFooter, IFooterNav };
export { styleScrollbars, DocumentationSection, CopyArea, InfoArea, IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage };
