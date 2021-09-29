/** Types ------------------------------------------ */
import { IDocumentationPage, IDocumentationPageContent, IPropertyDetail, IStyleDetail, IPreview, IComponentUsage, IEntityCategory } from './components/documentation-components/types';
import { IFooterNav } from './components/page-components/pagination-footer/PaginationFooter';
import { IThemeContext } from './contexts/theme';

export type { IDocumentationPage, IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage, IFooterNav, IThemeContext, IPreview, IEntityCategory };

/** Contexts --------------------------------------- */
import { EThemeModes, ThemeContext, ThemeProvider } from './contexts/theme';
export { EThemeModes, ThemeContext, ThemeProvider };

/** Utility scripts -------------------------------- */
import { styleScrollbars } from './utilities/style-scrollbar';
export { styleScrollbars };

/** Basic Components -------------------------------- */
import InfoArea from './components/basic-components/info-area/InfoArea';
import PrettyUL from './components/basic-components/pretty-ul/PrettyUL';

export { InfoArea, PrettyUL };

/** Code Components --------------------------------- */
import LiveCodeEditor, { jsxExample } from './components/code-components/live-code-editor/LiveCodeEditor';
import CopyArea from './components/code-components/copy-area/CopyArea';
import CopyButton from './components/code-components/copy-button/CopyButton';

export { LiveCodeEditor, jsxExample, CopyArea, CopyButton };

/** Documentation Components ------------------------ */
import DocumentationSection, { renderLiveCodeEditors } from './components/documentation-components/documentation-section/DocumentationSection';
import DocumentationRouterWithPageContent from './components/documentation-components/documentation-router-with-page-content/DocumentationRouterWithPageContent';
import ComponentPreviewGallery from './components/documentation-components/component-preview-gallery/ComponentPreviewGallery';
import DocumentationApp from './components/documentation-components/documentation-app/DocumentationApp';

export { DocumentationSection, renderLiveCodeEditors, DocumentationRouterWithPageContent, ComponentPreviewGallery, DocumentationApp };

/** Layout Components ------------------------------- */
import Table from './components/layout-components/table/Table';
export { Table };

/** Page Components --------------------------------- */
import PaginationFooter from './components/page-components/pagination-footer/PaginationFooter';
import Menu from './components/page-components/menu/Menu';
import Header from './components/page-components/header/Header';

/** Simulation Components --------------------------- */
import FunctionsCannon from './components/simulation-components/math/functions-cannon/FunctionsCannon';
export { FunctionsCannon };

export { PaginationFooter, Menu, Header };
