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
	{#if value === Styles.bootstrap}
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
			crossorigin="anonymous"
		/>
	{/if}
</svelte:head>

<select bind:value>
	<option value={Styles.none}>None</option>
	<option value={Styles.tailwind}>Tailwind</option>
	<option value={Styles.vapor}>Vapor</option>
	<option value={Styles.bootstrap}>Bootstrap</option>
	<option value={Styles.rainbow}>Rainbow</option>
</select>
