import React, { useEffect } from 'react';
import stylesheet from './documentation-section.module.css';
import PaginationFooter from 'components/page-components/pagination-footer/PaginationFooter';
import { IDocumentationPageContent } from '../types';
import { IonIcon } from '@ionic/react';
import { pushOutline, brushSharp } from 'ionicons/icons';
import { renderLiveCodeEditors, renderProps, renderStyles } from './helpers';

type IProps = Omit<IDocumentationPageContent, 'customContent'> & {
  className?: string;
};

const DocumentationSection: React.FC<IProps> = ({ onContentLoad, mainText, props, styles, description, codeExamples, prevNav, nextNav, className = '', children }) => {
  useEffect(() => {
    onContentLoad?.();
  }, [onContentLoad]);

  return (
    <div className={`${className} ${stylesheet.wrapper}`}>
      <section className={`${stylesheet.section} pb-8`}>
        {description && <div className='mt-8 mb-8'>{description}</div>}

        {mainText && mainText}

        {codeExamples && <div className='mt-4 mb-12'>{renderLiveCodeEditors(codeExamples)}</div>}

        {children}

        {props?.[0] && (
          <div>
            <h3 className='align-middle'>
              <IonIcon className='align-middle mr-2' src={pushOutline} />
              Props
            </h3>
            {renderProps(props)}
          </div>
        )}

        {styles?.[0] && (
          <div>
            <h3 className='align-middle'>
              <IonIcon className='align-middle mr-2 pb-025' src={brushSharp} />
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
