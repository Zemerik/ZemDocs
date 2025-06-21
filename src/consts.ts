export const SITE = {
	title: 'ZemDocs',
	description: 'Your Guide to Mastering Zem-Projects',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '/logo.png',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Zemerik/ZemDocs`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Welcome', link: 'en/introduction' },
		],
		'ZemPosts': [
			{ text: 'Introduction', link: 'en/zemposts/introduction' },
			{ text: 'v1.1.0-beta.1 (Latest)', link: 'en/zemposts/v110beta1' },
			{ text: 'v1.0.1', link: 'en/zemposts/v101' },
			{ text: 'Contributing', link: 'en/zemposts/contributing' },
		],
		'ZemShowcase': [
			{ text: 'Introduction', link: 'en/zemshowcase/introduction' },
			{ text: 'v2.0.1 (Latest)', link: 'en/zemshowcase/v201' },
			{ text: 'v1.0.1', link: 'en/zemshowcase/v101' },
			{ text: 'Contributing', link: 'en/zemshowcase/contributing' },
		],
		'ZemProfiles': [
			{ text: 'Introduction', link: 'en/zemprofiles/introduction' },
			{ text: 'v1.0.1', link: 'en/zemprofiles/v101' },
			{ text: 'v2.0.1', link: 'en/zemprofiles/v201' },
			{ text: 'Contributing', link: 'en/zemprofiles/contributing' },
		]
	},
};
export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
