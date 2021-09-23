import { PrettyUL, InfoArea, LiveCodeEditor } from 'maincode-ui';

const codeExample = `
<div className='p-1 glass-bg rounded'>
  <p>Nicely styled text area</p>
</div>
`;
const DocumentationPage: JSX.Element = (
  <>
    <p>Maincode UI offers a lot of styling through pre-defined classnames.</p>
    <PrettyUL
      items={[
        'This is entirely inspired by Tailwind CSS and can be seen as a less advanced subset of Tailwind.',
        'It can be exchanged for Tailwind CSS if you want additional classnames or smart functionality such as purging.',
        "In case you use Tailwind, you don't have to import our generics.",
      ]}
    />
    <InfoArea
      info={`Some specific classes, like <code>glass-bg</code> will be missing. We will split up Tailwind overwrites and our additions in the future. More information about this issue will follow.`}
    />
    <p>Here is an example of how to utilize the generic classes when styling and layouting your app:</p>
    <br />
    <LiveCodeEditor code={codeExample} enablePreview={true} />
  </>
);
export default DocumentationPage;
