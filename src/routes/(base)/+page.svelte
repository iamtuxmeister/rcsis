<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { Crumb } from '$lib/Breadcrumbs.svelte';
	import Container from '$lib/Container.svelte';
	import Card from '$lib/Card.svelte';
	const crumbs: Crumb[] = [{ name: 'Home', path: '' }];
	export let data;
	const { comments } = data;
</script>

<Container {crumbs}>
	<Heading class="p-8" tag="h1" customSize="text-3xl">Logged in index</Heading>
	<Card title="My Title">
		<div>
			<ul>
				{#each comments as comment}
					<li>{comment.user.username}: {comment.body}</li>
				{/each}
			</ul>
		</div>
	</Card>
</Container>
