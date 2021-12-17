export const basicCodeExample = `
<DocumentationSection
  className='px-2'
  onContentLoad={() => {
    setTitle("Page title");
    scrollToTop();
  }}
  description={
    <p>Create a consistent, readable template for your documentation page layout.</p>
  }
  mainText={
    <InfoArea className='mt-3'>
      DocumentationRouterWithPageContent uses this component internally to render all the pages provided to it.
    </InfoArea>
  }
  props={[
    {
      title: 'className',
      description: 'Classes for custom styling',
      type: 'string',
      required: false,
      defaultValue: '""'}
  ]}
  styles={[
    {
      propertyName: '--ion-color-primary-rgb',
      description: 'Controls the primary color of your application'
    }
  ]}
  codeExamples={codeExamples}
  prevNav={{ title: 'prevItem', url: '/info-area'}}
  nextNav={{ title: 'nextItem', url: '/copy-button'}}
>
  <p>Custom content</p>
</DocumentationSection>
`;
