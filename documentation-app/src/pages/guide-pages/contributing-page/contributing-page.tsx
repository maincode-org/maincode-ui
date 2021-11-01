import { PrettyList } from 'maincode-ui';

const ContributingPage: JSX.Element = (
  <>
    <h3>Contributing</h3>
    <p>
      Like this project? ☕{' '}
      <a href='https://buymeacoffee.com/maincode' target='_blank' rel='noreferrer'>
        buy us a coffee!
      </a>
    </p>
    <p>
      We always like to participate in interesting projects, and we love to help you overcome any difficulties with our library.
      <br />
      <br />
      If you have feedback or would like to work with is, please don&apos;t hesitate to contact us at <a href='mailto:mark@maincode.dk'>mark@maincode.dk</a> or{' '}
      <a href='mailto:mhn@maincode.dk'>mhn@maincode.dk</a>.
    </p>
    <h3 className='mt-2'>Extending the code base</h3>
    <p>Please see the development details below to get started with the code base.</p>
    <h4 className='mt-2'>Setting up</h4>
    <p>
      The repository contains two things. The UI library&apos;s modules in the root, and the documentation react app in the <code>/documentation-app</code> folder.
    </p>
    <p>
      To get started, first run <code>npm install</code> in both folders.
    </p>
    <p>
      Run <code>npm start</code> in the root folder to actively recompile the library code on changes. Run the same command in the documentation app to launch the app and listen to library component
      changes with live reloading.
    </p>
    <h4 className='mt-2'>Library structure</h4>
    Please notice how the logic is grouped in the following folder structure:
    <PrettyList
      ordering='unordered'
      items={[
        <>
          <code>/styles</code> contain the different stylesheets with their own logical CSS overwrites. See the usage example for an explanation on the difference.
        </>,
        <>
          <code>/src/components</code> contains sub-folders for each category of components offered in the library, and another level of sub-folders for each component in the category.
        </>,
        <>
          <code>/documentation-app/src/pages</code> contain all the documentation content for each component. Please keep this updated when contributing new components.
        </>,
        <>
          <code>/documentation-app/src/structure</code> assembles all the documentation pages into our navigation, route and layout generators. Documentation entries must be added here to appear in
          the webapp.
        </>,
      ]}
    />
  </>
);
export default ContributingPage;
