<script lang="ts">
	import { style, Styles } from './stores/style';

	let className: string = '';

	$: className = $style === Styles.vapor ? 'coveo-styleguide' : '';
</script>

<div class={className}>
	<slot />
</div>
