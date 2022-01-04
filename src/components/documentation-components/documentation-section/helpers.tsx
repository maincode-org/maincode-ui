import React from 'react';
import { IComponentUsage, IPropertyDetail, IStyleDetail } from '../types';
import { IonIcon } from '@ionic/react';
import { codeSlashSharp } from 'ionicons/icons';
import LiveCodeEditor from '../../code-components/live-code-editor/LiveCodeEditor';
import Table from '../../layout-components/table/Table';

export const renderLiveCodeEditors = (codeExamples: IComponentUsage[]): JSX.Element[] =>
  codeExamples.map((example, i) => (
    <div key={i} className='mb-8'>
      {example.title && (
        <h3 className='mt-12'>
          <IonIcon className='align-middle mr-2' src={codeSlashSharp} />
          <span className='align-middle'>{example.title}</span>
        </h3>
      )}
      {example.description && example.description}
      <LiveCodeEditor className='my-6' code={example.code} enablePreview={example.enablePreview} noInline={example.noInline} scope={example.scope} />
      {example.outro && example.outro}
    </div>
  ));

export const renderProps = (props: IPropertyDetail[]): JSX.Element[] => {
  return props.map((p, i) => (
    <Table
      key={i}
      title={<code>{p.title}</code>}
      className='mb-12 mt-8'
      properties={[
        { label: 'Description', value: p.description },
        { label: 'Type', value: `<code>${p.type}</code>` },
        { label: 'Required', value: `<code>${p.required}</code>` },
        p.defaultValue ? { label: 'Default value', value: `<code>${p.defaultValue}</code>` } : undefined,
      ]}
    />
  ));
};

export const renderStyles = (styles: IStyleDetail[]): JSX.Element => {
  const tableProperties = styles.map((s) => ({ label: `<code>${s.propertyName}</code>`, value: s.description }));
  return <Table title='Styles' className='mb-12 mt-8' properties={tableProperties} />;
};
