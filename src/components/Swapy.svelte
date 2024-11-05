<script lang="ts">
	import { createSwapy } from 'swapy'
	import { onMount } from 'svelte'

	let { selected }: { selected: string[] } = $props()
	let swapy

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

{#if selected.length > 0}
	<div class="container flex flex-col gap-y-4 p-4">
		{#each selected as dependency, index}
			<div class={`section-${index + 1}`} data-swapy-slot={`${dependency}`}>
				<div class="border-2 border-[#fff] p-4" data-swapy-item={`${index + 1}`}>
					{dependency}
				</div>
			</div>
		{/each}
	</div>
{:else}
	<p>Add some devDependency!</p>
{/if}
