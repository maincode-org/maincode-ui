import DocumentationSection, { IComponentUsage, IDocumentationPageContent, IPropertyDetail, IStyleDetail } from './components/documentation-components/documentation-section/DocumentationSection';
import { styleScrollbars } from './utilities/style-scrollbar';
import LiveCodeEditor, { jsxExample } from './components/code-components/live-code-editor/LiveCodeEditor';
import CopyArea from './components/code-components/copy-area/CopyArea';
import PaginationFooter, { IFooterNav } from './components/page-components/pagination-footer/PaginationFooter';
import InfoArea from './components/basic-components/info-area/InfoArea';

export type { IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage, IFooterNav };

export { PaginationFooter };
export { styleScrollbars, jsxExample, LiveCodeEditor, DocumentationSection, CopyArea, InfoArea };
