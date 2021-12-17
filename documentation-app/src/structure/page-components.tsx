import { IEntityCategory, PaginationFooter, IPreview, Header } from 'maincode-ui';
import { prepareURLPrefixComponents } from './url-prefix';
import { headerPageDocumentation } from '../pages/component-pages/page/header/documentation-page';
import { menuPageDocumentation } from '../pages/component-pages/page/menu/documentation-page';
import { paginationFooterPageDocumentation } from '../pages/component-pages/page/pagination-footer/documentation-page';
import menuLight from 'assets/previews/Menu-light.png';
import menuDark from 'assets/previews/Menu-dark.png';

const menuPreview: IPreview = {
  picture: menuLight,
  darkModePicture: menuDark,
};

export const pageComponentPages: IEntityCategory = prepareURLPrefixComponents({
  title: 'Page Components',
  pages: [
    {
      url: '/header',
      title: 'Header',
      preview: { element: <Header className='select-none relative' title='Header' githubURL='https://github.com/maincode-org/maincode-ui' /> },
      ...headerPageDocumentation,
    },
    {
      url: '/menu',
      title: 'Menu',
      preview: menuPreview,
      ...menuPageDocumentation,
    },
    {
      url: '/pagination-footer',
      title: 'Pagination Footer',
      preview: {
        element: <PaginationFooter className='w-full' prev={{ title: 'page title 1', URL: '/copy-button' }} next={{ title: 'page title 3', URL: '/info-area' }} />,
      },
      ...paginationFooterPageDocumentation,
    },
  ],
});
