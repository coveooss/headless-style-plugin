<script>
	import { buildQuerySummary } from '@coveo/headless';
	import { searchEngine } from './coveo/search-engine';
	import { onDestroy } from 'svelte';

	const querySummaryController = buildQuerySummary(searchEngine);
	let querySummaryState = querySummaryController.state;
	const unsubscribe = querySummaryController.subscribe(
		() => (querySummaryState = querySummaryController.state)
	);
	onDestroy(() => unsubscribe());
</script>

{#if !querySummaryState.hasError && querySummaryState.hasResults}
	<div>
		Results <span class="bold">{querySummaryState.firstResult}-{querySummaryState.lastResult}</span>
		of <span class="bold">{querySummaryState.total.toLocaleString()}</span>
		in {querySummaryState.durationInSeconds} seconds
	</div>
{/if}

<style>
	.bold {
		font-weight: bold;
	}
</style>
