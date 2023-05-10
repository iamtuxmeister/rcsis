<script lang="ts">
	import { Heading, P, Tabs, TabItem } from 'flowbite-svelte';
	import type { Crumb } from '../../components/Breadcrumbs.svelte';
	import Breadcrumbs from '../../components/Breadcrumbs.svelte';
	const crumbs: Crumb[] = [
		{ name: 'Home', path: '/' },
		{ name: 'Gradebook', path: '' }
	];
</script>

<Breadcrumbs {crumbs} />
<Heading class="p-8" tag="h1" customSize="text-3xl">Hello from the Gradebook</Heading>
<Tabs style="underline">
	<TabItem open>
		<div slot="title" class="flex items-center gap-2">
			<svg
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
					clip-rule="evenodd"
				/></svg
			>
			Profile
		</div>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<svg
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
				/></svg
			>
			Dashboard
		</div>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<svg
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
				/></svg
			>
			Settings
		</div>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<svg
				aria-hidden="true"
				class="w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path
					fill-rule="evenodd"
					d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
					clip-rule="evenodd"
				/></svg
			>
			Contacts
		</div>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Contacts:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabItem>
</Tabs>
