export const basicCodeExample = `
<div className='p-1'>
  <ComponentPreviewGallery
    className='my-2'
    componentPages={new Map([
      ["basic",
        {
          title: "Basic",
          pages: [
            {
              url: "/info-area",
              title: "Info Area",
              preview: { element: <InfoArea>Example of InfoArea</InfoArea> }
            },
            {
              url: "/pretty-list",
              title: "Pretty List",
              preview: { element: <PrettyList ordering='alphabetic' items={['List item 1', 'List item 2', 'List item 3']} /> }
            }
            ]
        }
      ],
      ["code",
        {
          title: "Code",
          pages: [
            {
              url: "/copy-button",
              title: "Copy Button",
              preview: { element: <CopyButton>Example of InfoArea</CopyButton> }
            }]
        }
      ]
    ])}
  />
</div>
`;
