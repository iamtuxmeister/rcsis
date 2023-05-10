<script lang="ts">
	import { Heading, P, Tabs, TabItem } from 'flowbite-svelte';
	import type { Crumb } from '../../components/Breadcrumbs.svelte';
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';
	const crumbs: Crumb[] = [
		{ name: 'Home', path: '/' },
		{ name: 'Gradebook', path: '' }
	];
	export let data;
	$: ({ users } = data);
</script>

<Breadcrumbs {crumbs} />
<Heading class="p-8" tag="h1" customSize="text-3xl">Hello from the Gradebook</Heading>
<ul>
	{#each users as user}
		<li>{user.firstName} {user.lastName} {user.age}</li>
	{/each}
</ul>
