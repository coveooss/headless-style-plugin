import {
	createStyleTransformers,
	StyleTransformer,
	StyleTransformerConfig
} from '$lib/transformers/create-style-transformers';
import { tailwindConfig, vaporConfig } from '$lib/transformers/style-mappings';
import { derived } from 'svelte/store';
import { style, Styles } from '$lib/stores/style';

const styles: Record<Styles, StyleTransformerConfig> = {
	[Styles.tailwind]: {
		mappings: tailwindConfig
	},
	[Styles.vapor]: {
		mappings: vaporConfig
	},
	[Styles.rainbow]: {},
	[Styles.none]: {}
};

export const transform = derived(style, (currentStyle, set: (value: StyleTransformer) => any) => {
	set(createStyleTransformers(styles[currentStyle]));
});
