import { IDocumentationPage } from '../types';
import React from 'react';
import { Route } from 'react-router-dom';
import { IFooterNav } from '../../page-components/pagination-footer/PaginationFooter';
import DocumentationSection from '../documentation-section/DocumentationSection';

const makeContent = (c: IDocumentationPage, setTitle: (title: string) => void, scrollToTop: () => void, prevNav?: IFooterNav, nextNav?: IFooterNav): React.ReactNode => (
  <DocumentationSection
    className='px-2'
    onContentLoad={() => {
      setTitle(c.title);
      scrollToTop();
    }}
    description={c.description}
    mainText={c.mainText}
    props={c.props}
    styles={c.styles}
    codeExamples={c.codeExamples}
    prevNav={prevNav}
    nextNav={nextNav}
  >
    {c.customContent}
  </DocumentationSection>
);

export const makeRoutes = (allPages: IDocumentationPage[], setPageTitle: (value: React.SetStateAction<string>) => void, scrollToTop: () => void): JSX.Element[] => {
  return allPages.map((c, i, elements) => (
    <Route
      key={i}
      path={c.url}
      exact={true}
      render={() => makeContent(c, setPageTitle, scrollToTop, { title: elements[i - 1]?.title, URL: elements[i - 1]?.url }, { title: elements[i + 1]?.title, URL: elements[i + 1]?.url })}
    />
  ));
};
