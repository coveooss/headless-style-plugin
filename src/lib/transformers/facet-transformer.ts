import type { FacetState, FacetValue } from '@coveo/headless';
import type { StyleState, TransformerFactory } from './transformers';

export interface FacetStyleState extends FacetState {
	style: {
		container: StyleState;
		title: StyleState;
		showMore: StyleState;
		showLess: StyleState;
	};
	values: Array<FacetValueStyleState>;
}

export interface FacetValueStyleState extends FacetValue {
	style: {
		container: StyleState;
		labelContainer: StyleState;
		valueLabel: StyleState;
		valueCount: StyleState;
	};
}

const createTransform: TransformerFactory<FacetState, FacetStyleState> = ({ mapper }) => (
	state
) => ({
	...state,
	style: {
		container: {
			class: mapper(Classes.container, state.isLoading && Classes.loading)
		},
		title: {
			class: mapper(Classes.title)
		},
		showMore: {
			class: mapper(Classes.showMore, !state.canShowMoreValues && Classes.showMoreHidden)
		},
		showLess: {
			class: mapper(Classes.showLess, !state.canShowLessValues && Classes.showLessHidden)
		}
	},
	values: state.values.map<FacetValueStyleState>((value) => ({
		...value,
		style: {
			container: {
				class: mapper(
					Classes.value,
					value.state === 'selected' && Classes.selectedValue,
					value.state === 'idle' && Classes.idleValue
				)
			},
			labelContainer: {
				class: mapper(Classes.valueLabelContainer)
			},
			valueLabel: {
				class: mapper(Classes.valueLabel)
			},
			valueCount: {
				class: mapper(Classes.valueCount)
			}
		}
	}))
});

enum Classes {
	container = 'coveo-facet-container',
	loading = 'coveo-facet-container-loading',
	title = 'coveo-facet-title',
	value = 'coveo-facet-value',
	showMore = 'coveo-facet-show-more',
	showMoreHidden = 'coveo-facet-show-more-hidden',
	showLess = 'coveo-facet-show-less',
	showLessHidden = 'coveo-facet-show-less-hidden',
	valueLabelContainer = 'coveo-facet-value-label-container',
	valueLabel = 'coveo-facet-value-label',
	valueCount = 'coveo-facet-value-count',
	idleValue = 'coveo-facet-value-idle',
	selectedValue = 'coveo-facet-value-selected'
}

export type FacetClasses = Classes;
export const createFacetTransform = createTransform;
