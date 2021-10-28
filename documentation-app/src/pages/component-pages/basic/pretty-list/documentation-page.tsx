import { IDocumentationPageContent, PrettyList } from 'maincode-ui';
import React from 'react';

export const prettyListPageDocumentation: IDocumentationPageContent = {
  description: <p>Displays a list of elements similar to either the ol or the ul HTML element.</p>,
  codeExamples: [
    {
      title: 'Unordered',
      description: <p>Unordered list</p>,
      code: "<PrettyList ordering='unordered' items={['List item 1', 'List item 2', 'List item 3']} />",
      scope: { PrettyList },
    },
    {
      title: 'Numeric ordering',
      description: <p>List with numeric ordering</p>,
      code: "<PrettyList ordering='numeric' items={['List item 1', 'List item 2', 'List item 3']} />",
      scope: { PrettyList },
    },
    {
      title: 'Alphabetic ordering',
      description: <p>List with alphabetic ordering</p>,
      code: "<PrettyList ordering='alphabetic' items={['List item 1', 'List item 2', 'List item 3']} />",
      scope: { PrettyList },
    },
  ],
  props: [
    { title: 'items', description: 'The list items', required: true, type: '(React.ReactNode | string)[]' },
    { title: 'ordering', description: 'The ordering of the list items', required: false, type: 'unordered | numeric | alphabetic', defaultValue: 'unordered' },
  ],
  styles: [{ propertyName: '--ion-color-primary-rgb', description: 'Controls the primary color of your application' }],
};
