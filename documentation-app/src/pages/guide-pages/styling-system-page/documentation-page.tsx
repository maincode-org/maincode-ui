import { PrettyList, LiveCodeEditor } from 'maincode-ui';

const codeExample = `
<div className='glass-bg'>
  <p>Standardized <span className="bold">styled</span> paragraph.</p>
</div>
`;

const DocumentationPage: JSX.Element = (
  <>
    <p>Maincode UI offers some additional styling through pre-defined classnames.</p>
    <PrettyList
      ordering='none'
      items={[
        <>
          This is entirely inspired by <b>Tailwind CSS</b> and can be used to supplement a Tailwind project beautifully.
        </>,
        <>
          We use <b>Tailwind CSS</b> as well in for this library, and leverage its functionalities such as purging to decrease package size.
        </>,
        <>
          In case you use <b>Tailwind CSS</b>, you don&apos;t have to import our tailwind.css file.
        </>,
      ]}
    />
    <p>Here are two examples of how to utilize the generic classes when styling and layouting your app:</p>
    <br />
    <LiveCodeEditor code={codeExample} enablePreview={true} />
  </>
);
export default DocumentationPage;
