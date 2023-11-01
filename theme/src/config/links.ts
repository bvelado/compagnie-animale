export interface Link {
	url: string;
	title: string;
	parent?: string;
}

export const links = {
	home: { url: '/', title: 'Accueil' },
	services: { url: '/services', title: 'Services' },
	tarifs: { url: '/tarifs', title: 'Tarifs' },
	about: { url: '/a-propos', title: 'À propos' },
	contact: { url: '/contact', title: 'Contact' },
	dogEducation: {
		url: '/services/chien/education-canine',
		title: 'Éducation canine',
		parent: 'services',
	},
	dogBehavior: {
		url: '/services/chien/bilan-comportemental',
		title: 'Bilan comportemental',
		parent: 'services',
	},
	dogWalk: {
		url: '/services/chien/promenade-individuelle',
		title: 'Promenade individuelle',
		parent: 'services',
	},
	dogAdoption: {
		url: '/services/chien/accompagnement-avant-adoption',
		title: 'Accompagnement avant adoption',
		parent: 'services',
	},
	dogLife: {
		url: '/services/chien/preparation-changements-de-vie',
		title: 'Préparation aux changements de vie',
		parent: 'services',
	},
	catAdoption: {
		url: '/services/chat/accompagnement-avant-adoption',
		title: 'Accompagnement avant adoption',
		parent: 'services',
	},
	catLife: {
		url: '/services/chat/preparation-changements-de-vie',
		title: 'Préparation aux changements de vie',
		parent: 'services',
	},
	catBehavior: {
		url: '/services/chat/bilan-comportemental',
		title: 'Bilan comportemental',
		parent: 'services',
	},
};

export interface HeaderNavItemData {
	title: string;
	url: string;
	children?: {
		title: string;
		items: HeaderNavItemData[];
	}[];
}

export const navItems: HeaderNavItemData[] = [
	{
		...links.services, children: [
			{
				title: 'Chien',
				items: [
					links.dogEducation,
					links.dogBehavior,
					links.dogWalk,
					links.dogAdoption,
					links.dogLife
				]
			},
			{
				title: 'Chat',
				items: [
					links.catBehavior,
					links.catAdoption,
					links.catLife,
				]
			}
		]
	},
	links.tarifs,
	links.about,
	links.contact,
];

// Build breadcrumbs using the links given the current page link
export function buildBreadcrumbs(currentLink: Link): Link[] {
	const breadcrumbs = [];
	let current = currentLink;
	while (current) {
		breadcrumbs.unshift(current);
		current = links[current.parent];
	}
	return breadcrumbs;
}
