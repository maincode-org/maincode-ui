import { colorPaletteSharp, contrastSharp, gitMergeSharp, extensionPuzzleSharp, rocketSharp, diamondSharp } from 'ionicons/icons';
import { makeOverviewContent } from '../pages/guide-pages/overview-page/documentation-page';
import QuickStartContent from '../pages/guide-pages/quick-start-page/documentation-page';
import ThemingContent from '../pages/guide-pages/theming-page/documentation-page';
import DarkModeContent from '../pages/guide-pages/dark-mode-page/documentation-page';
import StylingSystemContent from '../pages/guide-pages/styling-system-page/documentation-page';
import { basicComponentPages } from './basic-components';
import { IDocumentationPage } from 'maincode-ui';
import { prepareURLPrefixGuides } from './url-prefix';

export const guidePages: IDocumentationPage[] = prepareURLPrefixGuides([
  {
    url: '/overview',
    title: 'Overview',
    icon: extensionPuzzleSharp,
    description: <p>Play around with the Maincode UI components and get instant feedback.</p>,
    customContent: makeOverviewContent(basicComponentPages.pages),
  },
  {
    url: '/quick-start',
    title: 'Quickstart',
    icon: rocketSharp,
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
    icon: colorPaletteSharp,
    description: <p>This is the theming intro description</p>,
    customContent: ThemingContent,
  },
  {
    url: '/dark-mode',
    title: 'Dark Mode',
    icon: contrastSharp,
    description: <p>This is the dark mode intro description</p>,
    customContent: DarkModeContent,
  },
  {
    url: '/style-system',
    title: 'Style System',
    icon: diamondSharp,
    description: <p>This is the style system intro description</p>,
    customContent: StylingSystemContent,
  },
  {
    url: '/contributing',
    title: 'Contributing',
    icon: gitMergeSharp,
    description: <p>This is the contributions intro description</p>,
    customContent: StylingSystemContent,
  },
]);
