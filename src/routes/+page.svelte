<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { Crumb } from '../components/Breadcrumbs.svelte';
	import Breadcrumbs from '../components/Breadcrumbs.svelte';
	const crumbs: Crumb[] = [{ name: 'Home', path: '' }];
	export let data;
	$: ({ comments } = data);
</script>

<Breadcrumbs {crumbs} />
<Heading class="p-8" tag="h1" customSize="text-3xl">Logged in index</Heading>
<ul>
	{#each comments as comment}
		<li>{comment.user.username}: {comment.body}</li>
	{/each}
</ul>
