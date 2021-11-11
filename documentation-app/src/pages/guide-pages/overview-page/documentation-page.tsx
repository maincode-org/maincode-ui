import { ComponentPreviewGallery, IDocumentationPage, PrettyList } from 'maincode-ui';

export const makeOverviewContent = (previews: { title: string; pages: IDocumentationPage[] }[]): JSX.Element => (
  <>
    <PrettyList
      ordering='none'
      items={[
        <>
          <b>Simplistic but customizable.</b> The components are high level and include several sub-components. It trades some customization for less development time. We gradually expand our use-case
          support.
        </>,
        <>
          <b>Not a complete UI library</b> For a complete collection of lower level components, please see the Ionic Framework{' '}
          <a className='decoration-none' href='https://ionicframework.com/docs/components' target='_blank' rel='noreferrer'>
            component library
          </a>
          . Your <b>Maincode UI</b> theming will automatically theme any Ionic component!
        </>,
        <>
          <b>Usable with most React.js frameworks</b>. The components even support server side rendering in <b>Next.js</b> with the use of dynamic imports.
        </>,
        <>
          <b>An Ionic extension.</b> It provides utilities for some things which are usually difficult in Ionic apps, such as our <b>dark mode context</b> and <b>scrollbar styling</b> helper.
        </>,
      ]}
    />
    <h3 className='mt-2 mb-1'>Component overview</h3>
    Here you can play around with the Maincode UI components and receive instant feedback. Use the cards or the menu to see details and examples for each component or toolkit.
    <ComponentPreviewGallery componentPages={previews} className='my-2' />
  </>
);
