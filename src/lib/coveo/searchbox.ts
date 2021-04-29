import { buildSearchBox } from '@coveo/headless';
import { searchEngine } from './search-engine';
import { writable, derived } from 'svelte/store';
import { transform } from './transform';
import type { SearchBoxStyleState } from '$lib/transformers/searchbox-transformer';

export const searchBoxController = buildSearchBox(searchEngine);
const initialSearchBoxState = writable(searchBoxController.state);
searchBoxController.subscribe(() => initialSearchBoxState.set(searchBoxController.state));

export const searchBoxState = derived(
	[initialSearchBoxState, transform],
	([$initialStoreState, $transform], set: (value: SearchBoxStyleState) => any) => {
		set($transform.searchBox($initialStoreState));
	}
);
