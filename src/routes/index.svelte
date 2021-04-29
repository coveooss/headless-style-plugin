<script lang="ts">
	import AtomicLayout from '$lib/AtomicLayout.svelte';
	import Facet from '$lib/Facet.svelte';
	import QuerySummary from '$lib/QuerySummary.svelte';
	import ResultList from '$lib/ResultList.svelte';
	import Searchbox from '$lib/Searchbox.svelte';
	import Sort from '$lib/Sort.svelte';
	import StylePicker from '$lib/StylePicker.svelte';
</script>

<StylePicker />
<AtomicLayout>
	<div slot="searchbox">
		<Searchbox />
	</div>
	<div slot="facets">
		<Facet />
	</div>
	<div slot="sorts">
		<Sort />
	</div>
	<div slot="results">
		<ResultList />
	</div>
	<div slot="querysummary">
		<QuerySummary />
	</div>
</AtomicLayout>

<style>
	:global(body) {
		font-family: 'canada-type-gibson';
	}
</style>
