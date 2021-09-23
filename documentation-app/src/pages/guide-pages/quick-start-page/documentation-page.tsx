import { CopyArea, InfoArea } from 'maincode-ui';
import LiveCodeEditorContextWrapper from '../../../components/live-code-editor-context-wrapper/LiveCodeEditorContextWrapper';

const cssImportExample = `/** Maincode UI stylesheets. */
import 'maincode-ui/dist/index.css'; // All the component specific styles.
import 'maincode-ui/styles/theme.css'; // The default theme variables. See the "themes" section for customization.
import 'maincode-ui/styles/generics.css'; // A subset of tailwind classes (eg. "text-white"), and a few custom classes.`;

const usageExample = `import React from 'react';
import { CopyArea } from 'maincode-ui';

/** Maincode UI stylesheets. */
import 'maincode-ui/dist/index.css'; // All the component specific styles.
import 'maincode-ui/styles/theme.css'; // The default theme variables. See the "themes" section for customization.
import 'maincode-ui/styles/generics.css'; // A subset of tailwind classes (eg. "text-white"), and a few custom classes.

const ExampleApp: React.FC = () => {
  return <CopyArea command={'npm install maincode-ui'} />;
};`;

const DocumentationPage: JSX.Element = (
  <>
    <CopyArea command='npm i --save maincode-ui' />
    <p>or</p>
    <CopyArea command='yarn add maincode-ui' />
    <br />
    <h3>Import CSS </h3>
    <p>The library uses three different CSS files to make everything look good. </p>
    <p>- index.css which is the specific styles for all components.</p>
    <p>- theme.css which is the default theme variables.</p>
    <p>{`- generics.css a subset of tailwind-like generic classes (e.g. "text-white"), and a few custom classes.`}</p>
    <LiveCodeEditorContextWrapper codeExamples={[{ code: cssImportExample, enablePreview: false }]} />
    <br />
    <br />
    <h3>Usage example</h3>
    <LiveCodeEditorContextWrapper codeExamples={[{ code: usageExample, enablePreview: false }]} />
    <br />
    <InfoArea info='Note that the stylesheets need only be imported once for each app, not for every component.' />
    <br />
    <br />
  </>
);
export default DocumentationPage;
