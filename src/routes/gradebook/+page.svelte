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
	import type { Crumb } from '../../components/Breadcrumbs.svelte';
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';
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
<TableSearch placeholder="Search by last name" hoverable={true} bind:inputValue={searchTerm}>
	<TableHead>
		<TableHeadCell>ID</TableHeadCell>
		<TableHeadCell>First Name</TableHeadCell>
		<TableHeadCell>Last Name</TableHeadCell>
		<TableHeadCell>AgeS</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each filteredItems as item}
			<TableBodyRow>
				<a href="/gradebook/{item.id}"><TableBodyCell>{item.id}</TableBodyCell></a>
				<TableBodyCell><a href="/gradebook/{item.id}">{item.firstName}</a></TableBodyCell>
				<TableBodyCell><a href="/gradebook/{item.id}">{item.lastName}</a></TableBodyCell>
				<TableBodyCell><a href="/gradebook/{item.id}">{item.age}</a></TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
