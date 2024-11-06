<script lang="ts">
	import { createSwapy, type Swapy } from 'swapy'
	import { onMount } from 'svelte'
	import { devDependencies } from '../data/devDependencies'

	let { selected }: { selected: (typeof devDependencies)[number][] } = $props()
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
					class={`section-${index + 1} cursor-grab active:cursor-grabbing`}
					data-swapy-slot={`${dependency.name}`}
				>
					<div
						class="flex items-center justify-start gap-x-3 border-2 border-[#fff] p-4"
						data-swapy-item={`${dependency.name}`}
					>
						{@html dependency.svg}
						<p>{dependency.name}</p>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>Add some devDependency!</p>
	{/if}
</section>

<style>
	section {
		scrollbar-width: none;
	}
</style>
