import React from 'react';
import { IExampleDocumentation, IPropertyDocumentation, IStyleDocumentation } from '../documentation-types';

type IDocSection = {
  className?: string;
  description?: JSX.Element;
  examples?: IExampleDocumentation[];
  props?: IPropertyDocumentation[];
  styles?: IStyleDocumentation[];
};

const DocumentationSection: React.FC<IDocSection> = ({ className = '', description, children }) => {
  return (
    <section className={`${className} px-1`}>
      {description && description}
      <h3 className='theme-bg'>Lets put the usage / demos here</h3>
      <h3>Lets put the children of this page here</h3>
      {children}
      <h3>Lets put the prop descriptions here</h3>
      <h3 className='vh-full'>Lets put the style descriptions here</h3>
    </section>
  );
};

export default DocumentationSection;
