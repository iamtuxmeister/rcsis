<script lang="ts">
	import type { Crumb } from '$lib/Breadcrumbs.svelte';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	export let crumbs: Crumb[];
</script>

<Breadcrumbs {crumbs} />
<div class="container columns">
	<slot />
</div>
