<script lang="ts">
	import { page } from '$app/stores';
	import { Heading } from 'flowbite-svelte';
</script>

{#if $page.data.session}
	<slot />
{:else}
	<div class="text-center items-center">
		<Heading class="p-8" tag="h1" customSize="text-3xl">Access Denied</Heading>
		<p>
			<a href="/auth/signin"> You must be signed in to view this page </a>
		</p>
	</div>
{/if}
