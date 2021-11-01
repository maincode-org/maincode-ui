import { IDocumentationPageContent, InfoArea } from 'maincode-ui';

export const infoAreaPageDocumentation: IDocumentationPageContent = {
  description: <p>Emphasize texts, create tooltips etc. with a themed text information area.</p>,
  codeExamples: [
    {
      title: 'Emphasize small paragraph',
      description: <>InfoArea can be used to emphasize a paragraph of text.</>,
      code: `
<InfoArea className="m-2">
  <p>
    You can emphasize a paragraph by using the InfoArea component.
    It makes the text stand out, and it uses your theming variables.
  </p>
  </InfoArea>`,
      scope: { InfoArea },
    },
    {
      title: 'Tips',
      description: <>InfoArea can be used to make a styled tip.</>,
      code: `
<InfoArea className="m-2">
  <p>Tip: You can make pretty tips.</p>
</InfoArea>`,
      scope: { InfoArea },
    },
    {
      title: 'Children can be anything',
      description: <>Get creative - you can provide any HTML element.</>,
      code: `
<InfoArea className="m-2">
  <p>
    InfoArea using a link
    - <a href="https://maincode-org.github.io/maincode-ui/overview">
    See documentation page</a>
  </p>
</InfoArea>`,
      scope: { InfoArea },
    },
  ],
  props: [
    {
      title: 'className',
      description: 'Classes for custom styling',
      type: 'string',
      required: false,
      defaultValue: '""',
    },
    {
      title: 'children',
      description: 'The children of which the InfoArea is wrapped around.',
      type: 'React.ReactNode',
      required: false,
      defaultValue: 'none',
    },
  ],
  styles: [
    {
      propertyName: '--ion-color-primary-rgb',
      description: 'Controls the primary color of your application',
    },
  ],
};
