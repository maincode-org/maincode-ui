import ComponentPreview from '../../component-preview/ComponentPreview';
import { IDocumentationPage } from '../../../helpers/structure';

export const makeOverviewContent = (previews: IDocumentationPage[]): JSX.Element => (
  <>
    <h3>Some intro text</h3>
    <ComponentPreview componentPages={previews} />
    <h3>Some outro text</h3>
  </>
);
