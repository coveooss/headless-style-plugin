<script lang="ts">
	import { style, Styles } from './stores/style';

	let value: Styles = Styles.none;

	$: $style = value;
</script>

<svelte:head>
	{#if value === Styles.rainbow}
		<link rel="stylesheet" href="/static/rainbow.css" />
	{/if}
	{#if value === Styles.vapor}
		<link
			rel="stylesheet"
			href="https://static.cloud.coveo.com/styleguide/v10.1.0/css/CoveoStyleGuide.css"
		/>
	{/if}
</svelte:head>

<select bind:value>
	<option value={Styles.tailwind}>Tailwind</option>
	<option value={Styles.vapor}>Vapor</option>
	<option value={Styles.rainbow}>Rainbow</option>
	<option value={Styles.none}>None</option>
</select>
