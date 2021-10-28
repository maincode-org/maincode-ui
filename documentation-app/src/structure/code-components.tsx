import { IEntityCategory, CopyArea } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { copyAreaPageDocumentation } from '../pages/component-pages/basic/copy-area/documentation-page';
import { liveEditorDocumentation, liveEditorPreview } from '../pages/component-pages/code/live-editor-page/documentation-page';

export const codeComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Code Components',
  pages: [
    {
      url: '/copy-area',
      title: 'Copy Area',
      preview: { element: <CopyArea command={'npm install maincode-ui'} /> },
      ...copyAreaPageDocumentation,
    },
    {
      url: '/live-code-editor',
      title: 'Live Code Editor',
      preview: liveEditorPreview,
      ...liveEditorDocumentation,
    },
  ],
});
