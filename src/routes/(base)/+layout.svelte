<script lang="ts">
	import '../../app.postcss';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper
	} from 'flowbite-svelte';
	import { Cog } from 'svelte-heros-v2';
	import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	let breakPoint: number = 1024;
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	let drawerHidden: boolean = false;
	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});
	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	const toggleDrawer = () => {
		drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;
	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-2 top-12  md:top-3 md:right-2 z-50';
	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';
</script>

<svelte:window bind:innerWidth={width} />

<Navbar let:hidden let:toggle>
	<NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
	<NavBrand href="/" class="lg:ml-64">
		<Cog />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">
			My Website
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {divClass} {ulClass}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/pages/about">About</NavLi>
		<div class="signedInStatus">
			<p class="nojs-show loaded">
				{#if $page.data.session}
					{#if $page.data.session.user?.image}
						<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
					{/if}
					<span class="signedInText">
						{$page.data.session.user?.name}
					</span>
					<a href="/auth/signout" class="button" data-sveltekit-preload-data="off">Sign out</a>
				{:else}
					<span class="notSignedInText">You are not signed in</span>
					<a href="/auth/signin" class="buttonPrimary" data-sveltekit-preload-data="off">Sign in</a>
				{/if}
			</p>
		</div>
	</NavUl>
</Navbar>
<DarkMode btnClass={darkmodebtn} />
<Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-auto pb-32 bg-gray-100"
	id="sidebar"
>
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem
					label="Home"
					href="/"
					on:click={toggleSide}
					active={activeUrl === `/`}
					data-sveltkit-prefetch
				/>
				<SidebarItem
					label="Gradebook"
					href={`/gradebook/`}
					{spanClass}
					on:click={toggleSide}
					active={activeUrl === `/gradebook` || activeUrl === `/gradebook/1234`}
					data-sveltkit-prefetch
				/>
				<SidebarItem
					label="Article"
					href={`/articles/`}
					{spanClass}
					on:click={toggleSide}
					active={activeUrl === `/articles` || activeUrl === `/gradebook/1234`}
					data-sveltkit-prefetch
				/>
				<!-- <SidebarDropdownWrapper label="Articles">
					<SidebarItem
						label={meta.title}
						href={`/blog/${path}`}
						{spanClass}
						on:click={toggleSide}
						active={activeUrl === `/blog/${path}`}
					/>
				</SidebarDropdownWrapper> -->
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>

<div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
		<slot />
	</main>
</div>
