import React from 'react';
import { IExampleDocumentation, IPropertyDocumentation, IStyleDocumentation } from '../documentation-types';

type IDocSection = {
  description?: JSX.Element;
  examples?: IExampleDocumentation[];
  props?: IPropertyDocumentation[];
  styles?: IStyleDocumentation[];
  className?: string;
};

const DocumentationSection: React.FC<IDocSection> = ({ children }) => {
  return (
    <section className='px-1'>
      <h3>Lets put the intro description here</h3>
      <h3>Lets put the usage / demos here</h3>
      <h3>Lets put the children of this page here</h3>
      {children}
      <h3>Lets put the prop descriptions here</h3>
      <h3 className='vh-full'>Lets put the style descriptions here</h3>
    </section>
  );
};

export default DocumentationSection;
