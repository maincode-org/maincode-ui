export const basicCodeExample = `
<ComponentPreviewGallery
  className='my-2 m-1'
  componentPages={[
    {
      title: "Basic",
      pages: [
        {
          url: "#",
          title: "Info Area",
          preview: { element: <InfoArea>Example of InfoArea</InfoArea> }
        },
        {
          url: "#",
          title: "Pretty List",
          preview: {
            element:
              <PrettyList
                ordering='alphabetic'
                items={['List item 1', 'List item 2', 'List item 3']}
              />
          }
        }
      ]
    },
    {
      title: "Code",
      pages: [
        {
          url: "#",
          title: "Copy Button",
          preview: { element: <CopyButton>Example of Copy Button</CopyButton> }
        }
      ]
    }
  ]}
/>
`;
