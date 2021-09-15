import React from 'react';
import Table from '../../table/Table';

export type IDocumentationPageContent = {
  description?: JSX.Element;
  examples?: IComponentUsage[];
  customContent?: JSX.Element;
  props?: IPropertyDetail[];
  styles?: IStyleDetail[];
  outro?: JSX.Element;
};

export type IComponentUsage = number;

export type IPropertyDetail = {
  propTitle: string;
  description: string;
  attribute: string;
  type: string;
  default: string;
};

export type IStyleDetail = {
  className: string;
  description: string;
};

type IProps = IDocumentationPageContent & {
  className?: string;
};

const DocumentationSection: React.FC<IProps> = ({ className = '', customContent, props, styles, description, examples, children }) => {
  return (
    <section className={`${className}`}>
      {description && description}
      {examples && <h3 className='theme-bg'>Usage / demos</h3>}
      {children}
      {customContent && customContent}
      {props?.[0] && (
        <div>
          <h2>Props</h2>
          {renderProps(props)}
        </div>
      )}
      {styles?.[0] && (
        <div>
          <h2>Custom CSS properties</h2>
          {renderStyles(styles)}
        </div>
      )}
    </section>
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
