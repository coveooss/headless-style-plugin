const static = require('@sveltejs/adapter-static');
const preprocess = require('svelte-preprocess');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: static(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
