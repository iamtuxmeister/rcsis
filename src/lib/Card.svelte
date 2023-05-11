<script lang="ts">
	export let title: string = '';
	export let grid: boolean = false;
	export let colspan: string = '12';
	const gridParts = grid ? ' grid grid-cols-6 md:grid-cols-12 gap-2' : '';
</script>

<div
	class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-gray-200 dark:bg-gray-800 col-span-{colspan}"
>
	<div class="rounded-t mb-0 px-4 py-3 bg-transparent">
		<div class="flex flex-wrap items-center">
			<div class="relative w-full max-w-full flex-grow flex-1">
				<div class="font-bold">{title}</div>
			</div>
		</div>
	</div>
	<div class="p-4 flex-auto">
		<!-- Chart -->
		<div class="relative h-350-px{gridParts}">
			<slot />
		</div>
	</div>
</div>
