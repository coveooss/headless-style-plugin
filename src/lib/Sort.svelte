<script>
	import { buildCriterionExpression } from '@coveo/headless';

	import { sortController, sortState, criteria } from './coveo/sort';

	function getCurrentSortCriterionName() {
		return criteria.find(
			(criterion) => buildCriterionExpression(criterion[1]) === $sortState.sortCriteria
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

<div class={$sortState.style.sortContainer.class}>
	<span class={$sortState.style.sortLabel.class}> Sort by: </span>
	<select bind:value={selectedCriterionName} class={$sortState.style.sortSelect.class}>
		{#each criteria as criterion}
			<option name={criterion[0]}>{criterion[0]}</option>
		{/each}
	</select>
</div>
