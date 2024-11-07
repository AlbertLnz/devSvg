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

	// $inspect(techsGridCols)
</script>

<nav class={`relative grid w-full grid-cols-11 px-8`}>
	{#each techs as tech, index}
		<button
			onclick={() => handleAssignCategory(tech)}
			class={`z-10 h-full w-full bg-[#2A2D2E] py-1 hover:bg-opacity-50 ${
				assignCategory === tech ? 'bg-opacity-50' : ''
			}`}
		>
			{tech}
		</button>
	{/each}
	<div
		id="bg-options"
		class="absolute bottom-0 left-1/2 h-px w-[calc(100%-4rem)] -translate-x-1/2 transform bg-white"
	></div>
</nav>

<style>
	nav {
		scrollbar-width: none;
	}
</style>
