<script lang="ts">
	import { devDependencies } from '../data/devDependencies'

	let {
		selected,
		handleSelected
	}: {
		selected: (typeof devDependencies)[number]['name'][]
		handleSelected: (dependency: (typeof devDependencies)[number]['name']) => void
	} = $props()

	// $inspect(selected)
</script>

<section>
	<ul class="flex gap-x-2 p-4">
		{#each devDependencies as dependency}
			<li
				class={`rounded-full border border-dashed border-white px-4 py-1 ${selected.includes(dependency.name) ? 'border-[#BEB2D4] text-[#BEB2D4]' : 'border-white'}`}
			>
				<button
					onclick={() => handleSelected(dependency.name)}
					class="flex items-center justify-center gap-x-2"
				>
					{@html dependency.svg || ''}
					{dependency.name}
				</button>
			</li>
		{/each}
	</ul>
</section>
