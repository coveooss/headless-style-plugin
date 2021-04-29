<script>
	import { style, Styles } from './stores/style';

	let value = 'none';

	$: $style = value;
</script>

<svelte:head>
	{#if value === Styles.rainbow}
		<link rel="stylesheet" href="/static/rainbow.css" />
	{/if}
</svelte:head>

<select bind:value>
	<option value={Styles.tailwind}>Tailwind</option>
	<option value={Styles.rainbow}>Rainbow</option>
	<option value={Styles.none}>None</option>
</select>
