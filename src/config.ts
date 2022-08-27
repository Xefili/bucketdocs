export const SITE = {
	title: 'Documentation',
	description: 'Docs for Bucket Helper',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://bucketlounge.tk`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
	// indexName: 'XXXXXXXXXX',
	// appId: 'XXXXXXXXXX',
	// apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: 'Introduction', link: 'en/introduction' },

		{ text: 'Quality of Life', header: true },
		{ text: 'Getting the Squad together', link: 'en/page-2' },

		{ text: 'Moderation', header: true },
		{ text: 'Chat', link: 'en/page-3' },
		{ text: 'Manual Moderation', link: 'en/page-4'},

		{text: 'Fun', header: true},
		{text: 'Fun Commands', link: 'en/page-5'},
	],
};
