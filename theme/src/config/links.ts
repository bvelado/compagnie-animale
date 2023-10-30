export interface Link {
	url: string;
	title: string;
	parent?: string;
}

export const links = {
	home: { url: '/', title: 'Accueil' },
	services: { url: '/services', title: 'Services', parent: 'home' },
	tarifs: { url: '/tarifs', title: 'Tarifs', parent: 'home' },
	about: { url: '/a-propos', title: 'À propos', parent: 'home' },
	contact: { url: '/contact', title: 'Contact', parent: 'home' },
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
