<script lang="ts">
	import { facetController, facetState } from './coveo/facet';

	function toggleSelect(item) {
		facetController.toggleSelect(item);
	}

	function showMore() {
		facetController.showMoreValues();
	}

	function showLess() {
		facetController.showLessValues();
	}
</script>

<div class={$facetState.style.container.class}>
	{#if $facetState.values.length === 0 && $facetState.isLoading}
		<div>Loading...</div>
	{:else}
		<div class={$facetState.style.title.class}>Author</div>
		{#each $facetState.values as facetValue}
			<div class={facetValue.style.container.class} on:click={() => toggleSelect(facetValue)}>
				<input
					id="checkbox-{facetValue.value}"
					type="checkbox"
					checked={facetValue.state === 'selected'}
					disabled={$facetState.isLoading}
				/>
				<label for="checkbox-{facetValue.value}" class={facetValue.style.labelContainer.class}
					><span class={facetValue.style.valueLabel.class}>{facetValue.value}</span><span
						class={facetValue.style.valueCount.class}>({facetValue.numberOfResults})</span
					></label
				>
			</div>
		{/each}
		<button class={$facetState.style.showLess.class} on:click={showLess}>Show less</button>
		<button class={$facetState.style.showMore.class} on:click={showMore}>Show more</button>
	{/if}
</div>
