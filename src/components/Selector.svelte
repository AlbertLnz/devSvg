<script lang="ts">
	import { devDependencies } from '@/data/devDependencies'

	let {
		filteredDevDependencies,
		selected,
		handleSelected
	}: {
		filteredDevDependencies: (typeof devDependencies)[number][]
		selected: (typeof devDependencies)[number][]
		handleSelected: (dependency: (typeof devDependencies)[number]) => void
	} = $props()

	// $inspect(selected)
</script>

<section>
	<ul class="flex gap-x-2 p-4 px-8">
		{#each filteredDevDependencies as dependency}
			<li
				class={`rounded-full border border-dashed border-white px-4 py-1 ${selected.some((item) => item.name === dependency.name) ? 'border-[#774cc8] bg-[#774cc8]/20 font-medium' : 'border-[#BEB2D4]'}`}
			>
				<button
					onclick={() => handleSelected(dependency)}
					class="flex items-center justify-center gap-x-2"
				>
					<dependency.svg className="size-4" />
					{dependency.name}
				</button>
			</li>
		{/each}
	</ul>
</section>
