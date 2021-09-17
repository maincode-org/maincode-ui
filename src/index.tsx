import DocumentationSection, { IComponentUsage, IDocumentationPageContent, IPropertyDetail, IStyleDetail } from './components/documentation-components/documentation-section/DocumentationSection';
import { styleScrollbars } from './helpers/style-scrollbar';
import LiveCodeEditor, { jsxExample } from './components/live-code-editor/LiveCodeEditor';
import CopyArea from './components/copy-area/CopyArea';
import PagePaginationFooter, { IFooterNav } from './components/page-pagination-footer/PagePaginationFooter';
import InfoArea from './components/info-area/InfoArea';

export type { IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage, IFooterNav };

export { PagePaginationFooter };
export { styleScrollbars, jsxExample, LiveCodeEditor, DocumentationSection, CopyArea, InfoArea };
