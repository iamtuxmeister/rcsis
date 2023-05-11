<script lang="ts" context="module">
	export type Crumb = {
		name: string;
		path: string;
	};
</script>

<script lang="ts">
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	export let crumbs: Crumb[];
</script>

<Breadcrumb aria-label="Reverse Navigation">
	{#each crumbs as crumb}
		{#if crumb.path === '' && crumb.name === 'Home'}
			<BreadcrumbItem>
				<svelte:fragment slot="icon">
					<svg
						aria-hidden="true"
						class="w-4 h-4 mr-2"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
						/></svg
					>
				</svelte:fragment>{crumb.name}</BreadcrumbItem
			>
		{:else if crumb.path === ''}
			<BreadcrumbItem>{crumb.name}</BreadcrumbItem>
		{:else if crumb.name === 'Home'}
			<BreadcrumbItem href={crumb.path}>
				<svelte:fragment slot="icon">
					<svg
						aria-hidden="true"
						class="w-4 h-4 mr-2"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
						/></svg
					>
				</svelte:fragment>{crumb.name}</BreadcrumbItem
			>
		{:else}
			<BreadcrumbItem href={crumb.path}>{crumb.name}</BreadcrumbItem>
		{/if}
	{/each}
</Breadcrumb>
