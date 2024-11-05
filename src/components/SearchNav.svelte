<script>
	const techs = ['Python', 'JavaScript', 'Rust', 'PHP']
</script>

<nav class="flex flex-col overflow-y-hidden">
	{#each techs as tech, index}
		<button
			class={`w-full bg-[#090909] py-4 ${
				index === 0
					? 'border-b-2 border-[#090909] hover:border-white/60 hover:font-semibold'
					: index === techs.length - 1
						? 'border-t-2 border-[#090909] hover:border-white/60 hover:font-semibold'
						: 'border-y-2 border-[#090909] hover:border-white/60 hover:font-semibold'
			}`}
		>
			{tech}
		</button>{/each}
</nav>
