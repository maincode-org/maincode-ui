import { IPropertyDetail } from 'maincode-ui';

export const liveEditorProps: IPropertyDetail[] = [
  {
    title: 'code',
    description: 'The initial editable left side source code.',
    type: 'string',
    required: false,
    defaultValue: '""',
  },
  {
    title: 'enablePreview',
    description: 'Toggles the right side rendered preview of the code.',
    type: 'boolean',
    required: false,
    defaultValue: 'true',
  },
  {
    title: 'scope',
    description: 'The entities in scope for the editor. Eg. <code>{ IonButton }</code>.',
    type: '{ [key: string]: any }',
    required: false,
    defaultValue: 'none',
  },
  {
    title: 'noInline',
    description: 'Toggles direct rendering. When inline, code is previewed directly. When not, there must be a <code>render()</code> call.',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
  },
  {
    title: 'language',
    description: 'Sets the language for the highlighting.',
    type: 'string (<a href="https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js">see prism options</a>)',
    required: false,
    defaultValue: '"jsx"',
  },
  {
    title: 'className',
    description: 'Adds additional classnames to the outermost element.',
    type: 'string',
    required: false,
    defaultValue: '""',
  },
];
