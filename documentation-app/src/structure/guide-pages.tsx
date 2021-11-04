import { IDocumentationPage } from 'maincode-ui';
import { prepareURLPrefixGuides } from './url-prefix';
import { colorPaletteSharp, contrastSharp, gitMergeSharp, extensionPuzzleSharp, rocketSharp, diamondSharp } from 'ionicons/icons';
import { makeOverviewContent } from '../pages/guide-pages/overview-page/documentation-page';
import QuickStartContent from '../pages/guide-pages/quick-start-page/documentation-page';
import ThemingContent from '../pages/guide-pages/theming-page/documentation-page';
import DarkModeContent from '../pages/guide-pages/dark-mode-page/documentation-page';
import StylingSystemContent from '../pages/guide-pages/styling-system-page/documentation-page';
import ContributingContent from '../pages/guide-pages/contributing-page/documentation-page';
import { basicComponentPages } from './basic-components';
import { codeComponentPages } from './code-components';
import { simulationComponentPages } from './simulation-components';
import { documentationComponentPages } from './documentation-components';
import { layoutComponentPages } from './layout-components';
import { pageComponentPages } from './page-components';

const overviewContentMap = new Map<string, { title: string; pages: IDocumentationPage[] }>([
  ['basic', { title: 'Basic', pages: basicComponentPages.pages }],
  ['code', { title: 'Code', pages: codeComponentPages.pages }],
  ['documentation', { title: 'Documentation', pages: documentationComponentPages.pages }],
  ['layout', { title: 'Layout', pages: layoutComponentPages.pages }],
  ['page', { title: 'Page', pages: pageComponentPages.pages }],
  ['simulation', { title: 'Simulation', pages: simulationComponentPages.pages }],
]);

export const guidePages: IDocumentationPage[] = prepareURLPrefixGuides([
  {
    url: '/overview',
    title: 'Overview',
    icon: extensionPuzzleSharp,
    description: (
      <p>
        <b>Maincode UI</b> strives to deliver quickly integratable components to supplement <b>Ionic</b> or other <b>React.js</b> applications. It is:
      </p>
    ),
    mainText: makeOverviewContent(overviewContentMap),
  },
  {
    url: '/quick-start',
    title: 'Quickstart',
    icon: rocketSharp,
    customContent: QuickStartContent,
  },
  {
    url: '/theming',
    title: 'Theming',
    icon: colorPaletteSharp,
    customContent: ThemingContent,
  },
  {
    url: '/dark-mode',
    title: 'Dark Mode',
    icon: contrastSharp,
    customContent: DarkModeContent,
  },
  {
    url: '/style-system',
    title: 'Style System',
    icon: diamondSharp,
    customContent: StylingSystemContent,
  },
  {
    url: '/contributing',
    title: 'Contributing',
    icon: gitMergeSharp,
    customContent: ContributingContent,
  },
]);
