import ComponentPreview from '../../../components/component-preview/ComponentPreview';
import { IDocumentationPage } from '../../../structure/assembly';

export const makeOverviewContent = (previews: IDocumentationPage[]): JSX.Element => (
  <>
    <p>
      <b>Maincode UI</b> strives to deliver quickly integratable components to supplement <b>Ionic</b> or other <b>React.js</b> applications. It is..
    </p>
    <ul>
      <li>
        <b>Simplistic but customizable.</b> The components are high level and include several sub-components. It trades some customization for less development time. We gradually expand our use-case
        support.
      </li>
      <li>
        <b>Not a complete UI library</b> For a complete collection of lower level components, please see the Ionic Framework{' '}
        <a className='decoration-none' href='https://ionicframework.com/docs/components' target='_blank' rel='noreferrer'>
          component library
        </a>
        . Your <b>Maincode UI</b> theming will automatically theme any Ionic component!
      </li>
      <li>
        <b>An Ionic extension.</b> It provides utilities for some things which are usually difficult in Ionic apps, such as our <b>dark mode context</b> and <b>scrollbar styling</b> helper.
      </li>
    </ul>
    <br />
    <h2>Component overview:</h2>
    <ComponentPreview componentPages={previews} />
    <h3>Some outro text</h3>
  </>
);
