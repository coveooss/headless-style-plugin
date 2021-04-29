import {
	buildDateSortCriterion,
	buildFieldSortCriterion,
	buildRelevanceSortCriterion,
	buildSort,
	SortCriterion,
	SortOrder,
	SortState
} from '@coveo/headless';
import { searchEngine } from './search-engine';
import { writable, derived } from 'svelte/store';
import { transform } from './transform';
import type { SortStyleState } from '$lib/transformers/sort-transformer';

export const criteria: [string, SortCriterion][] = [
	['Relevance', buildRelevanceSortCriterion()],
	['Date (Ascending)', buildDateSortCriterion(SortOrder.Ascending)],
	['Date (Descending)', buildDateSortCriterion(SortOrder.Descending)],
	['Size (Ascending)', buildFieldSortCriterion('size', SortOrder.Ascending)],
	['Size (Descending)', buildFieldSortCriterion('size', SortOrder.Descending)]
];

export const sortController = buildSort(searchEngine);
const initialSortState = writable(sortController.state);
sortController.subscribe(() => initialSortState.set(sortController.state));
export const sortState = derived(
	[initialSortState, transform],
	([$initialStoreState, $transform], set: (value: SortStyleState) => any) => {
		set($transform.sort($initialStoreState));
	}
);
