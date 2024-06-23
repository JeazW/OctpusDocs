import type { MenuItem } from 'astro-accelerator-utils/types/NavPage';

export const menu: (MenuItem | 'categories' | 'tags' | 'toptags')[] = [
  {
    title:
      '<img src="/docs/img/octopus.svg" alt="Octopus Deploy" class="octo-logo" width="40" height="43">',
    order: 1,
  },
  {
    title: 'Product',
    order: 2,
    children: [
      {
        title: 'Features',
        url: 'https://yamldoc.liuyan.wang/features',
        order: 1,
      },
      {
        title: 'Tenanted deployments',
        url: 'https://yamldoc.liuyan.wang/use-case/tenanted-deployments',
        order: 2,
      },
      {
        title: 'Container deployments',
        url: 'https://yamldoc.liuyan.wang/use-case/container-deployments',
        order: 3,
      },
      {
        title: "What's new",
        url: 'https://yamldoc.liuyan.wang/whatsnew',
        order: 4,
      },
      {
        title: 'Roadmap',
        url: 'https://roadmap.yamldoc.liuyan.wang/tabs/2-planned',
        order: 5,
      },
      {
        title: 'Octopus vs. Azure DevOps',
        url: 'https://yamldoc.liuyan.wang/azure-devops',
        order: 6,
      },
      {
        title: 'Octopus vs. Jenkins',
        url: 'https://yamldoc.liuyan.wang/jenkins',
        order: 7,
      },
    ],
  },
  {
    title: 'Learn',
    order: 3,
    children: [
      {
        title: 'Getting started',
        url: '/docs/getting-started',
        order: 1,
      },
      {
        title: 'Guides',
        url: 'https://yamldoc.liuyan.wang/docs/guides',
        order: 2,
      },
      {
        title: 'DevOps handbook',
        url: 'https://yamldoc.liuyan.wang/devops/',
        order: 3,
      },
      {
        title: 'Deployments',
        url: '/docs/deployment-process',
        order: 4,
      },
      {
        title: 'Runbooks',
        url: '/docs/runbooks',
        order: 5,
      },
      {
        title: 'Training videos',
        url: 'https://www.youtube.com/playlist?list=PLAGskdGvlaw268i2ZTPC1ZrxwFjjKIdKH',
        order: 6,
      },
    ],
  },
  {
    title: 'Help',
    order: 4,
    children: [
      {
        title: 'Contact',
        url: 'https://yamldoc.liuyan.wang/company/contact',
        order: 1,
      },
      {
        title: 'Help and support',
        url: 'https://yamldoc.liuyan.wang/support',
        order: 2,
      },
      {
        title: 'Community',
        url: 'https://yamldoc.liuyan.wang/community',
        order: 3,
      },
      {
        title: 'Discussion forum',
        url: 'https://help.yamldoc.liuyan.wang/',
        order: 4,
      },
      {
        title: 'Upgrade and renew',
        url: 'https://yamldoc.liuyan.wang/upgrade',
        order: 5,
      },
    ],
  },
  {
    title: 'About us',
    order: 5,
    children: [
      {
        title: 'Company',
        url: 'https://yamldoc.liuyan.wang/company',
        order: 1,
      },
      {
        title: 'Partners',
        url: 'https://yamldoc.liuyan.wang/partners',
        order: 2,
      },
      {
        title: 'Careers',
        url: 'https://yamldoc.liuyan.wang/company/careers',
        order: 3,
      },
      {
        title: 'Trust center',
        url: 'https://yamldoc.liuyan.wang/company/trust',
        order: 4,
      },
      {
        title: 'Security',
        url: 'https://yamldoc.liuyan.wang/docs/security',
        order: 5,
      },
      {
        title: 'Webinars and events',
        url: 'https://yamldoc.liuyan.wang/events',
        order: 6,
      },
      {
        title: 'Stickers and swag',
        url: 'https://shop.yamldoc.liuyan.wang/',
        order: 7,
      },
    ],
  },
];

/*
See navigation.ts
Allows customisation of the footer navigation

'categories' -> Auto columns of links for categories
'tags' -> Auto columns of links for tags

*/
