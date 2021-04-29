<script>
	import { querySummaryController, querySummaryState } from './coveo/query-summary';
</script>

{#if !$querySummaryState.hasError && $querySummaryState.hasResults}
	<div>
		Results <span class="bold"
			>{$querySummaryState.firstResult}-{$querySummaryState.lastResult}</span
		>
		of <span class="bold">{$querySummaryState.total.toLocaleString()}</span>
		in {$querySummaryState.durationInSeconds} seconds
	</div>
{/if}

<style>
	.bold {
		font-weight: bold;
	}
</style>
