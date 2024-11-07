<script lang="ts">
	let {
		assignCategory,
		handleAssignCategory
	}: { assignCategory: string; handleAssignCategory: (category: string) => void } = $props()

	const techs = [
		'Python',
		'JavaScript',
		'Rust',
		'PHP',
		'Java',
		'C++',
		'C#',
		'Go',
		'Ruby',
		'Swift',
		'Kotlin'
	]

	// $inspect(assignCategory)
</script>

<nav class="flex flex-col overflow-y-auto">
	{#each techs as tech, index}
		<button
			onclick={() => handleAssignCategory(tech)}
			class={`bg-[#090909] py-4 ${
				index === 0
					? 'border-b-2 border-[#090909] hover:border-white/60 hover:font-semibold'
					: index === techs.length - 1
						? 'border-t-2 border-[#090909] hover:border-white/60 hover:font-semibold'
						: 'border-y-2 border-[#090909] hover:border-white/60 hover:font-semibold'
			} ${assignCategory === tech ? 'font-semibold' : ''}`}
		>
			{tech}
		</button>{/each}
</nav>

<style>
	nav {
		scrollbar-width: none;
	}
</style>
