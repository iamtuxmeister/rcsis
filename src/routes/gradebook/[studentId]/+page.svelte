<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';
	import type { Crumb } from '$lib/Breadcrumbs.svelte';
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
	<Card title="Student Information" className="flex flex-wrap space-x-4 space-y-4">
		<div class="items-center bg-slate-500 text-center rounded-2xl" style="width: 400px">
			<Img src={student.image} alt="sample 1" size="max-w-lg" alignment="mx-auto" />
		</div>
		<div class="flex min-w-400 space-x-4">
			<div>
				<div>Student Name:</div>
				<div>Age:</div>
				<div>Birth Date:</div>
				<div>Gender:</div>
				<div>Height:</div>
				<div>Weight:</div>
				<div>Eye Color:</div>
				<div>Hair:</div>
				<div>Phone:</div>
				<div>Address:</div>
				<div>City:</div>
				<div>State, Zip:</div>
			</div>
			<div>
				<div>{student.firstName} {student.lastName}</div>
				<div>{student.age}</div>
				<div>{student.birthDate}</div>
				<div>{student.gender}</div>
				<div>{student.height} cm</div>
				<div>{student.weight} kg</div>
				<div>{student.eyeColor}</div>
				<div>{student.hair.type} {student.hair.color}</div>
				<div>{student.phone}</div>
				<div>{student.address.address}</div>
				<div>{student.address.city}</div>
				<div>{student.address.state}, {student.address.postalCode}</div>
			</div>
		</div>
	</Card>
</Container>
