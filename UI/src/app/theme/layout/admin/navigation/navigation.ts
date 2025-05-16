export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  role?: string[];
  isMainParent?: boolean;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },{
    id: 'masters',
    title: 'Masters',
    type: 'collapse',
    icon: 'icon-navigation',
    children: [
      {
  id: 'importers',
  title: 'Importers',
  type: 'item',
  classes: 'nav-item',
  url: '/importers',
  icon: 'ti ti-briefcase', // represents business entities
  breadcrumbs: false
},
{
  id: 'states',
  title: 'States',
  type: 'item',
  classes: 'nav-item',
  url: '/states',
  icon: 'ti ti-map', // for geographical regions
  breadcrumbs: false
},
{
  id: 'countries',
  title: 'Country',
  type: 'item',
  classes: 'nav-item',
  url: '/countries',
  icon: 'ti ti-flag', // commonly used for countries
  breadcrumbs: false
},
{
  id: 'cities',
  title: 'City',
  type: 'item',
  classes: 'nav-item',
  url: '/cities',
  icon: 'ti ti-building-skyscraper', // representing cities or urban areas
  breadcrumbs: false
},
{
  id: 'consignees',
  title: 'Consignees',
  type: 'item',
  classes: 'nav-item',
  url: '/consignees',
  icon: 'ti ti-truck-delivery', // suitable for consignment/delivery
  breadcrumbs: false
},
{
  id: 'products', 
  title: 'Products', 
  type: 'item',
  classes: 'nav-item',
  url: '/products',
  icon: 'ti ti-package', // better for representing products/items
  breadcrumbs: false
}
    ]
  },
  {
    id: 'page',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'ti ti-key',
        children: [
          {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/guest/login',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/guest/register',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'elements',
    title: 'Elements',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'ti ti-typography'
      },
      {
        id: 'color',
        title: 'Colors',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
        icon: 'ti ti-brush'
      },
      {
        id: 'tabler',
        title: 'Tabler',
        type: 'item',
        classes: 'nav-item',
        url: 'https://tabler-icons.io/',
        icon: 'ti ti-plant-2',
        target: true,
        external: true
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/berry-angular/',
        icon: 'ti ti-vocabulary',
        target: true,
        external: true
      }
    ]
  }
];
