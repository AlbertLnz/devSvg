<script lang="ts">
	import { devDependencies } from '../data/devDependencies'

	let selected: (typeof devDependencies)[number]['name'][] = $state([])

	function addSelected(dependency: (typeof devDependencies)[number]['name']) {
		selected = !selected.includes(dependency)
			? [...selected, dependency]
			: selected.filter((item) => item !== dependency)
	}

	$inspect(selected)
</script>

<section>
	<ul class="flex gap-x-2 p-4">
		{#each devDependencies as dependency}
			<li
				class={`rounded-full border border-dashed border-white px-4 py-1 ${selected.includes(dependency.name) ? 'border-[#BEB2D4] text-[#BEB2D4]' : 'border-white'}`}
			>
				<button
					onclick={() => addSelected(dependency.name)}
					class="flex items-center justify-center gap-x-2"
				>
					{@html dependency.svg || ''}
					{dependency.name}
				</button>
			</li>
		{/each}
	</ul>
</section>
