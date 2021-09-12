import { heartOutline, heartSharp, colorPaletteOutline, colorPaletteSharp, contrastOutline, contrastSharp, gitMergeOutline, gitMergeSharp, rocketOutline, rocketSharp } from 'ionicons/icons';

export type IComponentDocumentation = {
  url: string;
  title: string;
  iosIcon: string;
  mdIcon: string;
  description: JSX.Element;
  examples: IComponentUsage[];
  props: IPropertyDetail[];
  styles?: IStyleDetail[];
};

type IComponentUsage = {};

type IPropertyDetail = {};

type IStyleDetail = {};

export const components: IComponentDocumentation[] = [
  {
    url: '?p=Overview',
    title: 'Overview',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '?p=QuickStart',
    title: 'Quickstart',
    iosIcon: rocketOutline,
    mdIcon: rocketSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '?p=Theming',
    title: 'Theming',
    iosIcon: colorPaletteOutline,
    mdIcon: colorPaletteSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '?p=DarkMode',
    title: 'Dark Mode',
    iosIcon: contrastOutline,
    mdIcon: contrastSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
  {
    url: '?p=Contributing',
    title: 'Contributing',
    iosIcon: gitMergeOutline,
    mdIcon: gitMergeSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
];

export const componentsMap = new Map<string, IComponentDocumentation>();
components.forEach((c) => componentsMap.set(c.url, c));
