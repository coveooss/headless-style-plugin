import type { SearchBoxState } from '@coveo/headless';
import type { TransformerFactory, StyleState, AttributeState } from './transformers';

export interface SearchBoxStyleState extends SearchBoxState {
	style: {
		searchBoxAndSuggestionsContainer: StyleState & AttributeState;
		searchBox: StyleState & AttributeState;
		button: StyleState & AttributeState;
		suggestionsContainer: StyleState;
		suggestion: StyleState & AttributeState;
	};
}

const createTransform: TransformerFactory<SearchBoxState, SearchBoxStyleState> = ({ mapper }) => (
	state
) => ({
	...state,
	style: {
		searchBoxAndSuggestionsContainer: {
			class: mapper(Classes.searchBoxAndSuggestionsContainer),
			attributes: {
				role: 'search',
				'aria-haspopup': 'listbox'
			}
		},
		searchBox: {
			class: mapper(Classes.searchBox),
			attributes: {
				role: 'combobox',
				'aria-autocomplete': 'list',
				title: 'Insert a query. Press enter to send',
				'aria-label': 'Search input'
			}
		},
		button: {
			class: mapper(Classes.searchButton),
			attributes: {
				'aria-label': 'Search'
			}
		},
		suggestionsContainer: {
			class: mapper(Classes.suggestions, state.suggestions.length === 0 && Classes.suggestionsEmpty)
		},
		suggestion: {
			class: mapper(Classes.suggestion),
			attributes: {
				tabindex: '0'
			}
		}
	}
});

enum Classes {
	searchBoxAndSuggestionsContainer = 'coveo-search-container',
	searchBox = 'coveo-search-input',
	searchButton = 'coveo-search-button',
	suggestions = 'coveo-search-suggestions',
	suggestionsEmpty = 'coveo-search-suggestions-empty',
	suggestion = 'coveo-search-suggestion'
}

export type SearchBoxClasses = Classes;
export const createSearchBoxTransform = createTransform;
