import {
  colorPaletteOutline,
  colorPaletteSharp,
  contrastOutline,
  contrastSharp,
  gitMergeOutline,
  gitMergeSharp,
  extensionPuzzleSharp,
  extensionPuzzleOutline,
  rocketOutline,
  rocketSharp,
  diamondOutline,
  diamondSharp,
} from 'ionicons/icons';
import { makeOverviewContent } from '../pages/guide-pages/overview-page/documentation-page';
import QuickStartContent from '../pages/guide-pages/quick-start-page/documentation-page';
import ThemingContent from '../pages/guide-pages/theming-page/documentation-page';
import DarkModeContent from '../pages/guide-pages/dark-mode-page/documentation-page';
import { IDocumentationPage } from './assembly';
import { basicComponentPages } from './basic-components';

export const guidePages: IDocumentationPage[] = [
  {
    url: '/overview',
    title: 'Overview',
    iosIcon: extensionPuzzleOutline,
    mdIcon: extensionPuzzleSharp,
    description: <p>This is the overview intro description</p>,
    customContent: makeOverviewContent(basicComponentPages.pages),
  },
  {
    url: '/quickStart',
    title: 'Quickstart',
    iosIcon: rocketOutline,
    mdIcon: rocketSharp,
    description: (
      <p>
        To get started you need to install the node package <code>maincode-ui</code>
      </p>
    ),
    customContent: QuickStartContent,
  },
  {
    url: '/theming',
    title: 'Theming',
    iosIcon: colorPaletteOutline,
    mdIcon: colorPaletteSharp,
    description: <p>This is the theming intro description</p>,
    customContent: ThemingContent,
  },
  {
    url: '/darkMode',
    title: 'Dark Mode',
    iosIcon: contrastOutline,
    mdIcon: contrastSharp,
    description: <p>This is the dark mode intro description</p>,
    customContent: DarkModeContent,
  },
  {
    url: 'styling-system',
    title: 'Styling System',
    iosIcon: diamondOutline,
    mdIcon: diamondSharp,
    description: <p>This is the styling system intro description</p>,
  },
  {
    url: '/contributing',
    title: 'Contributing',
    iosIcon: gitMergeOutline,
    mdIcon: gitMergeSharp,
    description: <p>This is the contributions description</p>,
  },
];
