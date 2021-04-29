import type { SortState } from '@coveo/headless';
import type { TransformerFactory, StyleState } from './transformers';

export interface SortStyleState extends SortState {
	style: {
		sortContainer: StyleState;
		sortLabel: StyleState;
		sortSelect: StyleState;
	};
}

const createTransform: TransformerFactory<SortState, SortStyleState> = ({ mapper }) => (state) => ({
	...state,
	style: {
		sortContainer: {
			class: mapper(Classes.sortContainer)
		},
		sortLabel: {
			class: mapper(Classes.sortLabel)
		},
		sortSelect: {
			class: mapper(Classes.sortSelect)
		}
	}
});

enum Classes {
	sortContainer = 'coveo-sort-container',
	sortLabel = 'coveo-sort-label',
	sortSelect = 'coveo-sort-select'
}

export type SortClasses = Classes;
export const createSortTransform = createTransform;
