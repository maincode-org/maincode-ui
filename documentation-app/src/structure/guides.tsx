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
import StylingSystemContent from '../pages/guide-pages/styling-system-page/documentation-page';
import { basicComponentPages } from './basic-components';
import { IDocumentationPage } from 'maincode-ui';

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
    url: '/quick-start',
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
    url: '/dark-mode',
    title: 'Dark Mode',
    iosIcon: contrastOutline,
    mdIcon: contrastSharp,
    description: <p>This is the dark mode intro description</p>,
    customContent: DarkModeContent,
  },
  {
    url: '/style-system',
    title: 'Style System',
    iosIcon: diamondOutline,
    mdIcon: diamondSharp,
    description: <p>This is the style system intro description</p>,
    customContent: StylingSystemContent,
  },
  {
    url: '/contributing',
    title: 'Contributing',
    iosIcon: gitMergeOutline,
    mdIcon: gitMergeSharp,
    description: <p>This is the contributions intro description</p>,
    customContent: StylingSystemContent,
  },
];
