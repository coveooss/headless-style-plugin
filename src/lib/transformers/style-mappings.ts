import type { FacetClasses } from './facet-transformer';
import type { SearchBoxClasses } from './searchbox-transformer';
import type { SortClasses } from './sort-transformer';

export type StyleMappingKeys = FacetClasses | SearchBoxClasses | SortClasses;

export type StyleMapping = Record<StyleMappingKeys, string>;

export const tailwindConfig: StyleMapping = {
	'coveo-facet-container':
		'mb-4 facet box-border p-3 lg:p-0 lg:block h-screen w-screen lg:h-auto lg:w-auto fixed object-left-top bg-background top-0 left-0 lg:static z-10',
	'coveo-facet-title':
		'flex flex-row items-center pb-2 mb-2 border-b border-solid border-divider font-bold text-on-background-variant text-base lg:text-sm ellipsed w-full',
	'coveo-facet-container-loading': 'disabled',
	'coveo-facet-show-more': 'flex flex-col items-start space-y-1 text-primary',
	'coveo-facet-show-more-hidden': 'hidden',
	'coveo-facet-show-less': 'flex flex-col items-start space-y-1 text-primary',
	'coveo-facet-show-less-hidden': 'hidden',
	'coveo-facet-value':
		'flex flex-row items-center py-1 flex pl-3 text-on-background cursor-pointer ellipsed',
	'coveo-facet-value-idle': '',
	'coveo-facet-value-selected': 'font-bold',
	'coveo-facet-value-label-container': 'flex pl-3 text-on-background cursor-pointer ellipsed',
	'coveo-facet-value-label': 'ellipsed',
	'coveo-facet-value-count': 'pl-1 text-gray-500',
	'coveo-search-container': 'relative flex align-stretch',
	'coveo-search-button':
		'p-2 rounded bg-primary hover:bg-primary-variant text-white hover:opacity-0.8',
	'coveo-search-input': 'p-2 rounded border focus:outline-none flex-1 mr-1',
	'coveo-search-suggestion':
		'm-0.5 p-2 rounded hover:bg-primary hover:text-white focus:bg-primary focus:text-white cursor-pointer select-none overflow-ellipsis overflow-hidden',
	'coveo-search-suggestions': 'p-2 mt-12 rounded bg-white border absolute left-0 right-0',
	'coveo-search-suggestions-empty': 'hidden',
	'coveo-sort-container': 'flex items-center',
	'coveo-sort-label': 'mr-2',
	'coveo-sort-select': 'p-2 rounded border appearance-none float-right'
};

export const vaporConfig: StyleMapping = {
	'coveo-facet-container': 'facet',
	'coveo-facet-title': 'facet-header facet-header-title',
	'coveo-facet-container-loading': 'transparency-1',
	'coveo-facet-show-more': 'ml2 btn',
	'coveo-facet-show-more-hidden': 'hidden',
	'coveo-facet-show-less': 'ml2 btn',
	'coveo-facet-show-less-hidden': 'hidden',
	'coveo-facet-value': 'cursor-pointer facet-value facet-selectable',
	'coveo-facet-value-idle': '',
	'coveo-facet-value-selected': '',
	'coveo-facet-value-label-container': 'cursor-pointer inline-flex space-between mod-width-90',
	'coveo-facet-value-label': '',
	'coveo-facet-value-count': '',
	'coveo-search-container': 'search-bar content-placeholder',
	'coveo-search-button': 'search-bar-icon-container',
	'coveo-search-input': 'search-bar-input text',
	'coveo-search-suggestion': 'btn',
	'coveo-search-suggestions': 'material-card mt4 p2 shadow-1 flex flex-wrap',
	'coveo-search-suggestions-empty': '',
	'coveo-sort-container': '',
	'coveo-sort-label': '',
	'coveo-sort-select': 'list-box'
};
