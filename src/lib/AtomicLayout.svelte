<div class="layout">
	<div class="header">
		<slot name="header" />
		<div class="searchbox-container">
			<slot name="searchbox" />
		</div>
	</div>
	<div class="facet-container">
		<slot name="facets" />
	</div>
	<div class="results-container">
		<div class="side-by-side-container">
			<slot name="querysummary" />
			<slot name="sorts" />
		</div>
		<slot name="results" />
	</div>
</div>

<style>
	.layout {
		grid-template-columns: 1fr minmax(150px, 250px) minmax(500px, 1000px) 1fr;
		grid-template-rows: 22px 50px 22px 1fr;
		gap: 20px;
		display: grid;
		margin: 0 auto;
	}

	.header {
		grid-column: 1 / span 4;
		grid-row: 1 / span 3;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.searchbox-container {
		grid-column: 3 / auto;
		grid-row: 2 / auto;
		width: 650px;
	}

	.facet-container {
		grid-column: 2 / auto;
		grid-row: 4 / auto;
	}

	.results-container {
		grid-column: 3 / auto;
		grid-row: 4 / auto;
	}

	.side-by-side-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
</style>
