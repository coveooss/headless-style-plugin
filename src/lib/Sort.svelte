<script lang="ts">
	import {
		buildDateSortCriterion,
		buildFieldSortCriterion,
		buildRelevanceSortCriterion,
		buildSort,
		SortCriterion,
		SortOrder
	} from '@coveo/headless';
	import { searchEngine } from './coveo/search-engine';
	import { writable, derived } from 'svelte/store';
	import { transform } from './coveo/transform';
	import type { SortStyleState } from '$lib/transformers/sort-transformer';
	import { buildCriterionExpression } from '@coveo/headless';
	import { onDestroy } from 'svelte';

	const criteria: [string, SortCriterion][] = [
		['Relevance', buildRelevanceSortCriterion()],
		['Date (Ascending)', buildDateSortCriterion(SortOrder.Ascending)],
		['Date (Descending)', buildDateSortCriterion(SortOrder.Descending)],
		['Size (Ascending)', buildFieldSortCriterion('size', SortOrder.Ascending)],
		['Size (Descending)', buildFieldSortCriterion('size', SortOrder.Descending)]
	];

	const sortController = buildSort(searchEngine);
	let sortState = $transform.sort(sortController.state);

	const unsubscribe = sortController.subscribe(
		() => (sortState = $transform.sort(sortController.state))
	);
	onDestroy(() => unsubscribe());

	$: sortState = $transform.sort(sortController.state);

	function getCurrentSortCriterionName() {
		return criteria.find(
			(criterion) => buildCriterionExpression(criterion[1]) === sortState.sortCriteria
		)[0];
	}

	let selectedCriterionName = getCurrentSortCriterionName();

	$: {
		if (selectedCriterionName !== getCurrentSortCriterionName()) {
			sortController.sortBy(
				criteria.find((criterion) => criterion[0] === selectedCriterionName)[1]
			);
		}
	}
</script>

<div class={sortState.style.sortContainer.class}>
	<span class={sortState.style.sortLabel.class}> Sort by: </span>
	<select bind:value={selectedCriterionName} class={sortState.style.sortSelect.class}>
		{#each criteria as criterion}
			<option name={criterion[0]}>{criterion[0]}</option>
		{/each}
	</select>
</div>
