// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LeavesMC Documentation',
  tagline: 'Documentation for all projects under the LeavesMC umbrella',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LeavesMC', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  routeBasePath: '/',
          editUrl:
            'https://github.com/LeavesMC/docs/blob/master/',
		  editLocalizedFiles: true
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LeavesMC',
        logo: {
          alt: 'LeavesMC Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'leaves/leaves',
            position: 'left',
            label: 'Leaves',
          },
		  { type: 'localeDropdown', position: 'right' },
		  {
			href: "https://discord.gg/5hgtU72w33",
			className: "header-icon-link header-discord-link",
			position: "right",
		  },
          {
            href: 'https://github.com/LeavesMC',
			className: "header-icon-link header-github-link",
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Leaves',
                to: '/leaves',
              },
              {
                label: 'Javadocs',
                href: 'https://repo.leavesmc.top',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/5hgtU72w33',
              }
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Main Site',
                href: 'https://leavesmc.top',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LeavesMC',
              },
			  {
				html: `
				<a href="https://www.vercel.com?utm_source=leavesmc&utm_campaign=oss" target="_blank" rel="noreferrer noopener" aria-label="Power by Vercel">
					<img src="/img/vercel.svg" alt="Power by Vercel" width="200" height="100" />
				</a>
				`  
			  },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LeavesMC and Contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
