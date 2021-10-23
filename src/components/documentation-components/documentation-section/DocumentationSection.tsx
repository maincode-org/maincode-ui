import React, { useEffect } from 'react';
import stylesheet from './documentation-section.module.css';
import Table from '../../layout-components/table/Table';
import PaginationFooter from 'components/page-components/pagination-footer/PaginationFooter';
import { IDocumentationPageContent, IPropertyDetail, IStyleDetail, IComponentUsage } from '../types';
import LiveCodeEditor from 'components/code-components/live-code-editor/LiveCodeEditor';
import { IonIcon } from '@ionic/react';
import { pushOutline, brushSharp, codeSlashSharp } from 'ionicons/icons';

type IProps = Omit<IDocumentationPageContent, 'customContent'> & {
  className?: string;
};

const DocumentationSection: React.FC<IProps> = ({ onContentLoad, className = '', mainText, props, styles, description, codeExamples, prevNav, nextNav, children }) => {
  useEffect(() => {
    onContentLoad?.();
  }, [onContentLoad]);

  return (
    <div className={`${className} ${stylesheet.wrapper}`}>
      <section className={`${stylesheet.section} pb-2`}>
        {description && <div className='mt-1 mb-2'>{description}</div>}

        {mainText && mainText}

        {codeExamples && <div className='mt-1 mb-3'>{renderLiveCodeEditors(codeExamples)}</div>}

        {children}

        {props?.[0] && (
          <div>
            <h3 className='mt-4 align-middle'>
              <IonIcon className='align-middle mr-05' src={pushOutline} />
              Props
            </h3>
            {renderProps(props)}
          </div>
        )}

        {styles?.[0] && (
          <div>
            <h3 className='mt-4 align-middle'>
              <IonIcon className='align-middle mr-05 pb-025' src={brushSharp} />
              Customization
            </h3>
            {renderStyles(styles)}
          </div>
        )}
      </section>

      {(prevNav || nextNav) && <PaginationFooter prev={prevNav} next={nextNav} />}
    </div>
  );
};
export default DocumentationSection;

export const renderLiveCodeEditors = (codeExamples: IComponentUsage[]): JSX.Element[] =>
  codeExamples.map((example, i) => (
    <div key={i} className='mb-2'>
      {example.title && (
        <h3 className='mt-4'>
          <IonIcon className='align-middle mr-05' src={codeSlashSharp} />
          <span className='align-middle'>{example.title}</span>
        </h3>
      )}
      {example.description && example.description}
      <LiveCodeEditor className='my-2' code={example.code} enablePreview={example.enablePreview} noInline={example.noInline} scope={example.scope} />
      {example.outro && example.outro}
    </div>
  ));

const renderProps = (props: IPropertyDetail[]): JSX.Element[] => {
  return props.map((p, i) => (
    <Table
      key={i}
      title={<code>{p.title}</code>}
      className='mb-3 mt-2'
      properties={[
        { label: 'Description', value: p.description },
        { label: 'Type', value: `<code>${p.type}</code>` },
        { label: 'Required', value: `<code>${p.required}</code>` },
        { label: 'Default value', value: `<code>${p.defaultValue}</code>` },
      ]}
    />
  ));
};

const renderStyles = (styles: IStyleDetail[]): JSX.Element => {
  const tableProperties = styles.map((s) => ({ label: `<code>${s.propertyName}</code>`, value: s.description }));
  return <Table title='Styles' className='mb-3 mt-2' properties={tableProperties} />;
};
