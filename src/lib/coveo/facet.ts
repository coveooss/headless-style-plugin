import { buildFacet } from '@coveo/headless';
import { searchEngine } from './search-engine';
import { writable, derived } from 'svelte/store';
import { transform } from './transform';
import type { FacetStyleState } from '$lib/transformers/facet-transformer';

export const facetController = buildFacet(searchEngine, {
	options: { field: 'author' }
});
const initialFacetState = writable(facetController.state);
facetController.subscribe(() => initialFacetState.set(facetController.state));

export const facetState = derived(
	[initialFacetState, transform],
	([$initialStoreState, $transform], set: (value: FacetStyleState) => any) => {
		set($transform.facet($initialStoreState));
	}
);
