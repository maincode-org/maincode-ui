import { IDocumentationPageContent, InfoArea } from 'maincode-ui';

export const infoAreaPageDocumentation: IDocumentationPageContent = {
  description: <p>Emphasize texts, expose important details and more, with a themed text information area.</p>,
  codeExamples: [
    {
      title: 'Emphasize small paragraph',
      description: <>InfoArea can be used to emphasize a paragraph of text.</>,
      code: `
<InfoArea className="m-8">
    You can emphasize a paragraph by using the <code>InfoArea</code> component.
    It makes the text stand out, and it uses your theming variables.
</InfoArea>`,
      scope: { InfoArea },
    },

    {
      title: 'Children can be anything',
      description: <>Get creative - you can provide any HTML element.</>,
      code: `
<InfoArea className="m-8">
  <p>
    <code>InfoArea</code> with a link
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
      description: 'The children of which the InfoArea is wrapped around',
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
    {
      propertyName: '--ion-text-color',
      description: 'Controls the color of the text within the area',
    },
  ],
};
