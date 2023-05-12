<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';
	import type { Crumb } from '$lib/Breadcrumbs.svelte';
	import Breadcrumbs from '$lib/Breadcrumbs.svelte';
	import Container from '$lib/Container.svelte';
	import Card from '$lib/Card.svelte';
	export let data;
	const { user: student } = data;
	const crumbs: Crumb[] = [
		{ name: 'Home', path: '/' },
		{ name: 'Gradebook', path: '/gradebook' },
		{ name: `${student.firstName} ${student.lastName}`, path: '' }
	];
</script>

<Container {crumbs}>
	<Heading class="p-8" tag="h1" customSize="text-3xl"
		>{student.firstName} {student.lastName}</Heading
	>
	<Card title="Student Information">
		<div class="float-left items-center bg-slate-500 text-center rounded-2xl" style="width: 400px">
			<Img src={student.image} alt="sample 1" size="max-w-lg" alignment="mx-auto" />
		</div>
		<div style="width: 400px" class="float-left">
			<div class="float-left">
				<div class="ps-4">Student Name:</div>
				<div class="ps-4">Age:</div>
				<div class="ps-4">Birth Date:</div>
				<div class="ps-4">Gender:</div>
				<div class="ps-4">Height:</div>
				<div class="ps-4">Weight:</div>
				<div class="ps-4">Eye Color:</div>
				<div class="ps-4">Hair:</div>
				<div class="ps-4">Phone:</div>
				<div class="ps-4">Address:</div>
				<div class="ps-4">City:</div>
				<div class="ps-4">State, Zip:</div>
			</div>
			<div class="float-left">
				<div class="ps-4">{student.firstName} {student.lastName}</div>
				<div class="ps-4">{student.age}</div>
				<div class="ps-4">{student.birthDate}</div>
				<div class="ps-4">{student.gender}</div>
				<div class="ps-4">{student.height} cm</div>
				<div class="ps-4">{student.weight} kg</div>
				<div class="ps-4">{student.eyeColor}</div>
				<div class="ps-4">{student.hair.type} {student.hair.color}</div>
				<div class="ps-4">{student.phone}</div>
				<div class="ps-4">{student.address.address}</div>
				<div class="ps-4">{student.address.city}</div>
				<div class="ps-4">{student.address.state}, {student.address.postalCode}</div>
			</div>
		</div>
	</Card>
</Container>
