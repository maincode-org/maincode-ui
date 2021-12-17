import { IEntityCategory, IPreview } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { componentPreviewGalleryDocumentation } from '../pages/component-pages/documentation/component-preview-gallery/documentation-page';
import { documentationAppPageDocumentation } from '../pages/component-pages/documentation/documentation-app/documentation-page';
import { documentationRouterPageDocumentation } from '../pages/component-pages/documentation/documentation-router-with-page-content/documentation-page';
import { documentationSectionPageDocumentation } from '../pages/component-pages/documentation/documentation-section/documentation-page';
import componentPreviewLight from 'assets/previews/Component-preview-light.png';
import componentPreviewDark from 'assets/previews/Component-preview-dark.png';

const componentPreviewGalleryPreview: IPreview = {
  picture: componentPreviewLight,
  darkModePicture: componentPreviewDark,
};

export const documentationComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Documentation Components',
  pages: [
    {
      url: '/component-preview-gallery',
      title: 'Component Preview Gallery',
      preview: componentPreviewGalleryPreview,
      ...componentPreviewGalleryDocumentation,
    },
    {
      url: '/documentation-app',
      title: 'Documentation App',
      preview: {
        element: (
          <p>
            This entire page is just a <code>DocumentationApp</code> component.
          </p>
        ),
      },
      ...documentationAppPageDocumentation,
    },
    {
      url: '/documentation-router',
      title: 'Documentation Router with Page Content',
      preview: { element: <p>This component controls the routes for the menus of this site.</p> },
      ...documentationRouterPageDocumentation,
    },
    {
      url: '/documentation-section',
      title: 'Documentation Section',
      preview: {
        element: (
          <p>
            The content of each page on this site is layouted by separate <code>DocumentationSection</code> components.
          </p>
        ),
      },
      ...documentationSectionPageDocumentation,
    },
  ],
});
