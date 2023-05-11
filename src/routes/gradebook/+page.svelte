<script lang="ts">
	import {
		Heading,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';
	import type { Crumb } from '$lib/Breadcrumbs.svelte';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import Card from '$lib/Card.svelte';
	import { goto } from '$app/navigation';
	const crumbs: Crumb[] = [
		{ name: 'Home', path: '/' },
		{ name: 'Gradebook', path: '' }
	];
	export let data;
	const { users } = data;
	let searchTerm = '';
	$: filteredItems = users.filter(
		(user: { lastName: string }) =>
			user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<Breadcrumbs {crumbs} />
<Heading class="p-8" tag="h1" customSize="text-3xl">Hello from the Gradebook</Heading>
<Card title="Student List">
	<TableSearch placeholder="Search by last name" hoverable={true} bind:inputValue={searchTerm}>
		<TableHead>
			<TableHeadCell>ID</TableHeadCell>
			<TableHeadCell>First Name</TableHeadCell>
			<TableHeadCell>Last Name</TableHeadCell>
			<TableHeadCell>AgeS</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each filteredItems as item}
				<!-- href="/gradebook/{item.id}" -->
				<TableBodyRow on:click={() => goto(`/gradebook/${item.id}`)} style="cursor:pointer">
					<TableBodyCell>{item.id}</TableBodyCell>
					<TableBodyCell>{item.firstName}</TableBodyCell>
					<TableBodyCell>{item.lastName}</TableBodyCell>
					<TableBodyCell>{item.age}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</Card>
