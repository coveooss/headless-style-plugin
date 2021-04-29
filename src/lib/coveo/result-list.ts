import { buildResultList } from '@coveo/headless';
import { searchEngine } from './search-engine';
import { writable } from 'svelte/store';

export const resultListController = buildResultList(searchEngine, {
	options: {
		fieldsToInclude: ['date']
	}
});
export const resultListState = writable(resultListController.state);
resultListController.subscribe(() => resultListState.set(resultListController.state));
