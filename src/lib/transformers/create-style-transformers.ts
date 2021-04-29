import { createFacetTransform } from './facet-transformer';
import { createSearchBoxTransform } from './searchbox-transformer';
import { createSortTransform } from './sort-transformer';
import type { StyleMapping } from './style-mappings';
import type { ClassMapper } from './transformers';

function isString(v: unknown): v is string {
	return typeof v === 'string';
}

export type StyleTransformerConfig = {
	mappings?: StyleMapping;
};

export type StyleTransformer = ReturnType<typeof createStyleTransformers>;

export const createStyleTransformers = (config: StyleTransformerConfig = {}) => {
	const mapper: ClassMapper = (...values) =>
		values
			.filter(isString)
			.map((value) => (value in (config?.mappings || {}) ? config.mappings[value] : value))
			.join(' ');

	const transformConfig = {
		mapper
	};

	return {
		facet: createFacetTransform(transformConfig),
		searchBox: createSearchBoxTransform(transformConfig),
		sort: createSortTransform(transformConfig)
	};
};
