<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import type { Crumb } from '$lib/Breadcrumbs.svelte';
	import Container from '$lib/Container.svelte';
	import Card from '$lib/Card.svelte';
	const crumbs: Crumb[] = [{ name: 'Home', path: '' }];
	export let data;
	const { comments } = data;
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<p>
	{#if Object.keys($page.data.session || {}).length}
		{#if $page.data.session.user.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user.email || $page.data.session.user.name}</strong>
		</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<span class="notSignedInText">You are not signed in</span>
		<button on:click={() => signIn('github')}>Sign In with GitHub</button>
	{/if}
</p>

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
