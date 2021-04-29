<script>
	import { searchBoxController, searchBoxState } from './coveo/searchbox';

	let text = $searchBoxState.value;
	$: {
		searchBoxController.updateText(text);
		searchBoxController.showSuggestions();
	}

	/**
	 * @param {KeyboardEvent} e
	 */
	function handleKeyUp(e) {
		if (e.key === 'Enter') {
			searchBoxController.submit();
		}
	}

	let suggestionsOpened = false;

	function openSuggestions() {
		suggestionsOpened = true;
	}

	function closeSuggestions() {
		setTimeout(() => {
			suggestionsOpened = false;
		}, 150);
	}

	/**
	 * @param {string} suggestion
	 */
	function selectSuggestion(suggestion) {
		searchBoxController.selectSuggestion(suggestion);
		text = suggestion;
	}
</script>

<div
	on:click={openSuggestions}
	on:focusin={openSuggestions}
	on:focusout={closeSuggestions}
	class={$searchBoxState.style.searchBoxAndSuggestionsContainer.class}
	{...$searchBoxState.style.searchBoxAndSuggestionsContainer.attributes}
>
	<input
		bind:value={text}
		on:keyup={handleKeyUp}
		class={$searchBoxState.style.searchBox.class}
		{...$searchBoxState.style.searchBox.attributes}
	/>
	<button
		on:click={() => searchBoxController.submit()}
		class={$searchBoxState.style.button.class}
		{...$searchBoxState.style.searchBox.attributes}>Search</button
	>
	<ul
		class={`${$searchBoxState.style.suggestionsContainer.class} ${
			suggestionsOpened ? '' : 'hidden'
		}`}
	>
		{#each $searchBoxState.suggestions as { rawValue }}
			<li
				class={$searchBoxState.style.suggestion.class}
				on:click={() => selectSuggestion(rawValue)}
				{...$searchBoxState.style.suggestion.attributes}
			>
				{rawValue}
			</li>
		{/each}
	</ul>
</div>
