<script lang="ts">
	import { resultListState } from './coveo/result-list';
	import { getDefaultIconPath } from './coveo/icons/default-icon';

	function formatDate(dateAsString) {
		return new Date(dateAsString).toLocaleDateString('en-CA');
	}
</script>

<div>
	{#if $resultListState.results.length === 0}
		{#if $resultListState.isLoading}
			<span>Loading...</span>
		{:else}
			<div>No Results</div>
		{/if}
	{:else}
		{#each $resultListState.results as result}
			<div class="template-container">
				<div>
					<img class="icon" style="background-image: url({getDefaultIconPath(result)});" />
				</div>
				<div class="content-container">
					<div class="title-container">
						<a href={result.clickUri}>{result.title}</a>
						<div>{formatDate(result.raw.date)}</div>
					</div>
					<div>{result.excerpt}</div>
				</div>
			</div>
		{/each}
	{/if}
</div>

<style>
	a {
		color: #1372ec;
	}

	a:hover {
		text-decoration: underline;
	}

	.template-container {
		display: flex;

		border-top: 1px solid lightgray;
		padding: 15px;
	}

	.content-container {
		width: 100%;
		display: grid;
		margin-left: 15px;
		gap: 15px;
	}

	.title-container {
		display: flex;
		justify-content: space-between;
	}

	.icon {
		--atomic-icon-size: 30px;

		display: block;
		width: var(--atomic-icon-size);
		height: var(--atomic-icon-size);
		background-size: var(--atomic-icon-size) var(--atomic-icon-size);
		border-radius: 2px;

		border-style: none;
	}
</style>
