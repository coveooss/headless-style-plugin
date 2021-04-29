import {
	createStyleTransformers,
	StyleTransformer
} from '$lib/transformers/create-style-transformers';
import { tailwindConfig } from '$lib/transformers/style-mappings';
import { derived } from 'svelte/store';
import { style } from '$lib/stores/style';

export const transform = derived(style, (currentStyle, set: (value: StyleTransformer) => any) => {
	set(
		createStyleTransformers(
			currentStyle === 'tailwind'
				? {
						mappings: tailwindConfig
				  }
				: {}
		)
	);
});
