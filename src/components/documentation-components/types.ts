import { IFooterNav } from '../page-components/pagination-footer/PaginationFooter';

export type IPreview = {
  picture?: string;
  darkModePicture?: string;
  element?: React.ReactNode;
};

export type IDocumentationPage = IDocumentationPageContent & {
  url: string;
  title: string;
  preview?: IPreview;
  icon?: string;
};

export type IEntityCategory = {
  title: string;
  pages: IDocumentationPage[];
};

export type IDocumentationPageContent = {
  description?: JSX.Element;
  mainText?: JSX.Element;
  onContentLoad?: () => void;
  codeExamples?: IComponentUsage[];
  customContent?: JSX.Element;
  props?: IPropertyDetail[];
  styles?: IStyleDetail[];
  outro?: JSX.Element;
  prevNav?: IFooterNav;
  nextNav?: IFooterNav;
};

export type IComponentUsage = {
  code: string;
  title?: string;
  description?: JSX.Element;
  outro?: JSX.Element;
  language?: string;
  enablePreview?: boolean;
  noInline?: boolean;
  scope?: { [key: string]: any };
};

export type IPropertyDetail = {
  title: string;
  description: string;
  type: string;
  required: boolean;
  defaultValue?: string;
};

export type IStyleDetail = {
  propertyName: string;
  description: string;
};
