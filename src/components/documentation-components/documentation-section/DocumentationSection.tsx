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
  name: string;
  description: string;
};

type IProps = IDocumentationPageContent & {
  className?: string;
};

const DocumentationSection: React.FC<IProps> = ({ className = '', props, description, children }) => {
  return (
    <section className={`${className} px-1`}>
      {description && description}
      <h3 className='theme-bg'>Lets put the usage / demos here</h3>
      <h3>Lets put the children of this page here</h3>
      {children}
      <br />
      <br />
      {props && (
        <div className='flex flex-col'>
          {props.map((p, i) => (
            <Table
              key={i}
              title={p.propTitle}
              properties={[
                { label: 'Description', value: p.description },
                { label: 'Attribute', value: p.attribute },
                { label: 'Type', value: p.type },
                { label: 'Default', value: p.default },
              ]}
            />
          ))}
        </div>
      )}
      <h3>Lets put the style descriptions here</h3>
    </section>
  );
};
export default DocumentationSection;
