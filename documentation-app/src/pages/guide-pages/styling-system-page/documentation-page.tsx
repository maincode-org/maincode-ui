import { PrettyList, LiveCodeEditor } from 'maincode-ui';

const codeExample = `
<div className='m-2 p-1 glass-bg rounded shadow-lg'>
  <p>Standardized <span className="bold">styled</span> paragraph.</p>
</div>
`;

const DocumentationPage: JSX.Element = (
  <>
    <p>Maincode UI offers a lot of styling through pre-defined classnames.</p>
    <PrettyList
      ordering='unordered'
      items={[
        <>
          This is entirely inspired by <b>Tailwind CSS</b> and can be seen as a less advanced subset of Tailwind.
        </>,
        <>
          It can be exchanged for <b>Tailwind CSS</b> if you want additional classnames or smart functionality such as purging.
        </>,
        <>
          In case you use <b>Tailwind CSS</b>, you don&apos;t have to import our generics.
        </>,
      ]}
    />
    <p>Here are two examples of how to utilize the generic classes when styling and layouting your app:</p>
    <br />
    <LiveCodeEditor code={codeExample} enablePreview={true} />
  </>
);
export default DocumentationPage;
