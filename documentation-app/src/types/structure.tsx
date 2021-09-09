import { heartOutline, heartSharp } from 'ionicons/icons';

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
    url: '/ComponentDocumentationPage',
    title: 'Component Documentation Page',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    description: <p>This is the description</p>,
    examples: [],
    props: [],
  },
];

export const componentsMap = new Map<string, IComponentDocumentation>();
components.forEach((c) => componentsMap.set(c.url, c));
