/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  leaves: [
    "leaves/leaves",
	{
		type: "category",
		label: "Getting Started",
		link: {
			type: "generated-index",
            slug: "leaves/cat/getting-started",
		},
        items: [
			"leaves/getting-started/getting-started",
			"leaves/getting-started/migration"
        ],
	},
	"leaves/configuration",
	"leaves/fakeplayer"
  ],
};

module.exports = sidebars;
