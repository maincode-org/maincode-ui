import { CopyArea, InfoArea, LiveCodeEditor } from 'maincode-ui';
import { urlPrefix } from '../../../structure/url-prefix';

const cssImportExample = `/** Maincode UI stylesheets. */
import 'maincode-ui/dist/index.css'; // All the component specific styles.
import 'maincode-ui/styles/theme.css'; // The default theme variables. See the "themes" section for customization.
import 'maincode-ui/styles/generics.css'; // A subset of tailwind classes (eg. "text-white"), and a few custom classes.`;

const usageExample = `import React from 'react';
import { CopyArea } from 'maincode-ui';

/** Maincode UI stylesheets. */
import 'maincode-ui/dist/index.css'; // All the component specific styles.
import 'maincode-ui/styles/theme.css'; // The default theme variables. See the "themes" section for customization.
import 'maincode-ui/styles/tail-generics.css'; // A subset of tailwind classes (eg. "text-white").
import 'maincode-ui/styles/generics.css'; // A few common classes be Maincode (eg. "glass-bg").

const ExampleApp: React.FC = () => {
  return <CopyArea command={'npm install --save maincode-ui'} />;
};`;

const DocumentationPage: JSX.Element = (
  <>
    <h3>Installation</h3>
    <p>
      To get started you need to install the node package <code>maincode-ui</code> one of the following commands:
    </p>
    <CopyArea command='npm i --save maincode-ui' />
    <p>or</p>
    <CopyArea command='yarn add maincode-ui' />
    <br />
    <InfoArea>
      Note that the library is currently not compatible with <b>React v. 17+</b>, due to the{' '}
      <a href='https://github.com/FormidableLabs/react-live' target='_blank' rel='noreferrer'>
        React Live v. 2.3.0
      </a>{' '}
      library{"'"}s incompatibility with <b>React v. {'>'} 16.14</b>.
      <br />
      We will upgrade the version as soon as possible and have opened an{' '}
      <a href='https://github.com/maincode-org/maincode-ui/issues/53' target='_blank' rel='noreferrer'>
        issue
      </a>{' '}
      which can be monitored for updates.
    </InfoArea>
    <h3 className='mt-3'>Usage</h3>
    <p>For documentation on each individual component, please visit the specific showcases or the overview page.</p>
    <p>
      The code below is the minimum needed to get started with a <b>Maincode UI</b> app, and spawning a <a href={`${urlPrefix}/copy-area`}>CopyArea</a> component identical to the first command on this
      page.
    </p>
    <br />
    <LiveCodeEditor code={usageExample} enablePreview={false} />
    <br />
    <InfoArea>Note that the stylesheets need only be imported once for each app, not for every component.</InfoArea>
    <br />
    <br />
  </>
);
export default DocumentationPage;
