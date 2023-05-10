<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { Crumb } from '../components/Breadcrumbs.svelte';
	import Breadcrumbs from '../components/Breadcrumbs.svelte';
	const crumbs: Crumb[] = [{ name: 'Home', path: '' }];
</script>

<Breadcrumbs {crumbs} />
<Heading class="p-8" tag="h1" customSize="text-3xl">Logged in index</Heading>
<P class="px-8 py-4">
	This is a dashboard landing page with information and quicklinks for the particular role
</P>
