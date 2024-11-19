<script lang="ts">
	import { fade } from 'svelte/transition'
	import { createSwapy, type Swapy } from 'swapy'
	import { onMount } from 'svelte'
	import { devDependencies } from '@/data/devDependencies'
	import Cross from '@/assets/icons/Cross.svelte'

	let {
		selected,
		handleSelected
	}: {
		selected: (typeof devDependencies)[number][]
		handleSelected: (dependency: (typeof devDependencies)[number]) => void
	} = $props()

	let swapy: Swapy

	$effect(() => {
		if (selected.length > 0) {
			onMount(() => {
				const container = document.querySelector('.container')

				if (container) {
					swapy = createSwapy(container, {
						animation: 'spring'
					})
					swapy.enable(true)
				}
			})
		}
	})

	// $inspect(selected)
</script>

<section class="h-full overflow-y-auto">
	{#if selected.length > 0}
		<div class="container flex flex-col gap-y-4 p-4">
			{#each selected as dependency, index}
				<div
					transition:fade={{ duration: 200 }}
					class={`section-${index + 1} cursor-grab active:cursor-grabbing`}
					data-swapy-slot={`${dependency.name}`}
				>
					<div
						class="relative flex items-center justify-start gap-x-3 rounded-md border border-[#000] p-4 hover:bg-black/10 dark:border-[#fff] dark:hover:bg-white/10"
						data-swapy-item={`${dependency.name}`}
					>
						<dependency.svg className="size-5" />
						<p>{dependency.name}</p>
						<div class="absolute right-3 top-0 flex h-full items-center justify-center">
							<button class="px-2 py-0.5" onclick={() => handleSelected(dependency)}
								><Cross className="size-5 text-red-400 hover:text-red-500" /></button
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p class="flex h-full flex-col items-center justify-center text-2xl font-bold">
			<span>Add some dev</span>
			<span>dependency</span>
		</p>
	{/if}
</section>

<style>
	section {
		scrollbar-width: none;
	}
</style>
