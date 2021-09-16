import { CopyArea } from 'maincode-ui';

const QuickStartContent = () => {
  return (
    <>
      <CopyArea command='npm i --save maincode-ui' />
      <p>or</p>
      <CopyArea command='yarn add maincode-ui' />
      <br />
      <br />
      <h3>Import CSS </h3>
      <p>The library uses three different CSS files to make everything look good. </p>
      <p>- index.css which has some awesome styling???</p>
      <p>- theme.css which themes the Maincode UI components.</p>
      <p>- generics.css which includes generic styling across the Maincode UI components.</p>
      <br />
      <br />
      <h3>Usage example</h3>
      <p>Use the component - the three CSS lines</p>
      <br />
      <br />
      <h3>Styling of scroll-bar</h3>
      <p>Additionally the library provides a way to style the scrollbar of your application. </p>
      <p>An example of how to utilize this function is shown below. </p>
      <br />
      <br />
    </>
  );
};
export default QuickStartContent;
