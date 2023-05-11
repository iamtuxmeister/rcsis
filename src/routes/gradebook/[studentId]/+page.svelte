<script lang="ts">
	import { Heading, Img } from 'flowbite-svelte';
	import type { Crumb } from '../../../components/Breadcrumbs.svelte';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	export let data;
	const { user: student } = data;
	const crumbs: Crumb[] = [
		{ name: 'Home', path: '/' },
		{ name: 'Gradebook', path: '/gradebook' },
		{ name: `${student.firstName} ${student.lastName}`, path: '' }
	];
</script>

<Breadcrumbs {crumbs} />
<Heading class="p-8" tag="h1" customSize="text-3xl">{student.firstName} {student.lastName}</Heading>

<div class="">
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
</div>

<!-- "firstName": "Alison",
    "lastName": "Reichert",
    "maidenName": "Franecki",
    "age": 21,
    "gender": "female",
    "email": "jtreleven5@nhs.uk",
    "phone": "+351 527 735 3642",
    "username": "jtreleven5",
    "password": "zY1nE46Zm",
    "birthDate": "1969-07-21",
    "image": "https://robohash.org/laboriosamfacilisrem.png",
    "bloodGroup": "A+",
    "height": 149,
    "weight": 105.7,
    "eyeColor": "Amber",
    "hair": {
        "color": "Blond",
        "type": "Straight"
    },
    "domain": "bandcamp.com",
    "ip": "49.201.206.36",
    "address": {
        "address": "18 Densmore Drive",
        "city": "Essex",
        "coordinates": {
            "lat": 44.492953,
            "lng": -73.101883
        },
        "postalCode": "05452",
        "state": "VT"
    },
    "macAddress": "6C:34:D0:4B:4E:81",
    "university": "Universidade da Beira Interior",
    "bank": {
        "cardExpire": "03/22",
        "cardNumber": "345675888286047",
        "cardType": "americanexpress",
        "currency": "Euro",
        "iban": "LB69 1062 QCY5 XS5T VOKU KJFG XP4S"
    },
    "company": {
        "address": {
            "address": "6231 North 67th Avenue",
            "city": "Glendale",
            "coordinates": {
                "lat": 33.5279666,
                "lng": -112.2022551
            },
            "postalCode": "85301",
            "state": "AZ"
        },
        "department": "Accounting",
        "name": "D'Amore and Sons",
        "title": "Civil Engineer"
    },
    "ein": "78-3192791",
    "ssn": "158-68-0184",
    "userAgent": "Mozilla/5.0 (Windows; U; Windows NT 6.0; nb-NO) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5" -->
