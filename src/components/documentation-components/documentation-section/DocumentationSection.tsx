import React, { useEffect } from 'react';
import stylesheet from './documentation-section.module.css';
import Table from '../../layout-components/table/Table';
import PaginationFooter from 'components/page-components/pagination-footer/PaginationFooter';
import { IDocumentationPageContent, IPropertyDetail, IStyleDetail } from '../types';

type IProps = IDocumentationPageContent & {
  className?: string;
};

const DocumentationSection: React.FC<IProps> = ({ onContentLoad, className = '', customContent, props, styles, description, codeExamples, prevNav, nextNav, urlPrefix, children }) => {
  useEffect(() => {
    onContentLoad?.();
  }, [onContentLoad]);

  return (
    <div className={stylesheet.wrapper}>
      <section className={`${className}`}>
        {description && (
          <div>
            {description}
            <br />
            <br />
          </div>
        )}
        {codeExamples && <h3 className='theme-bg'>Usage / demos</h3>}
        {children}
        {customContent && customContent}
        {props?.[0] && (
          <div>
            <h2>Props</h2>
            {renderProps(props)}
          </div>
        )}
        {styles?.[0] && (
          <div className='mb-2'>
            <h2>Custom CSS properties</h2>
            {renderStyles(styles)}
          </div>
        )}
      </section>
      {(prevNav || nextNav) && <PaginationFooter className='px-2' prev={prevNav} next={nextNav} urlPrefix={urlPrefix} />}
    </div>
  );
};
export default DocumentationSection;

const renderProps = (props: IPropertyDetail[]): JSX.Element[] => {
  return props.map((p, i) => (
    <Table
      key={i}
      title={p.propTitle}
      properties={[
        { label: 'Description', value: p.description },
        { label: 'Attribute', value: `<code>${p.attribute}</code>` },
        { label: 'Type', value: `<code>${p.type}</code>` },
        { label: 'Default', value: `<code>${p.default}</code>` },
      ]}
    />
  ));
};

const renderStyles = (styles: IStyleDetail[]): JSX.Element => {
  const tableProperties = styles.map((s) => ({ label: s.className, value: s.description }));
  return <Table title='Styles' properties={tableProperties} />;
};
