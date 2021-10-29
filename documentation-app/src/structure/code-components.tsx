import { IEntityCategory, CopyArea, CopyButton } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { copyAreaPageDocumentation } from '../pages/component-pages/code/copy-area/documentation-page';
import { liveEditorDocumentation, liveEditorPreview } from '../pages/component-pages/code/live-editor-page/documentation-page';
import { copyButtonPageDocumentation } from '../pages/component-pages/code/copy-button/documentation-page';

export const codeComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Code Components',
  pages: [
    {
      url: '/copy-area',
      title: 'Copy Area',
      preview: {
        element: <CopyArea command='npm install maincode-ui' />,
      },
      ...copyAreaPageDocumentation,
    },
    {
      url: '/copy-button',
      title: 'Copy Button',
      preview: { element: <CopyButton code='npm i maincode-ui' /> },
      ...copyButtonPageDocumentation,
    },
    {
      url: '/live-code-editor',
      title: 'Live Code Editor',
      preview: liveEditorPreview,
      ...liveEditorDocumentation,
    },
  ],
});
