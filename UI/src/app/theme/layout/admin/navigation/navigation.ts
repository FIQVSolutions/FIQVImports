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
  },
  {
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
        url: '/masters/importers',
        icon: 'ti ti-briefcase', // represents business entities
        breadcrumbs: false
      },
      {
        id: 'states',
        title: 'States',
        type: 'item',
        classes: 'nav-item',
        url: '/masters/states',
        icon: 'ti ti-map', // for geographical regions
        breadcrumbs: false
      },
      {
        id: 'countries',
        title: 'Country',
        type: 'item',
        classes: 'nav-item',
        url: '/masters/countries',
        icon: 'ti ti-flag', // commonly used for countries
        breadcrumbs: false
      },
      {
        id: 'cities',
        title: 'City',
        type: 'item',
        classes: 'nav-item',
        url: '/masters/cities',
        icon: 'ti ti-building-skyscraper', // representing cities or urban areas
        breadcrumbs: false
      },
      {
        id: 'consignees',
        title: 'Consignees',
        type: 'item',
        classes: 'nav-item',
        url: '/masters/consignees',
        icon: 'ti ti-truck-delivery', // suitable for consignment/delivery
        breadcrumbs: false
      },
      {
        id: 'products',
        title: 'Products',
        type: 'item',
        classes: 'nav-item',
        url: '/masters/products',
        icon: 'ti ti-package', // better for representing products/items
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'imports',
    title: 'Imports',
    type: 'collapse',
    icon: 'icon-navigation',
    children: [
      {
        id: 'purchaseorder',
        title: 'Purchase Orders',
        type: 'item',
        classes: 'nav-item',
        url: 'imports/purchase-order-list',
        icon: 'ti ti-clipboard-list', // better for representing products/items
        breadcrumbs: true
      },
      {
        id: 'purchase-order',
        title: 'Create PO',
        type: 'item',
        classes: 'nav-item',
        url: '/imports/purchase-order',
        icon: 'ti ti-clipboard-list', // better for representing products/items
        breadcrumbs: true
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
            url: '/login',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/register',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  }
];
