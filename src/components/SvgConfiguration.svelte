<script lang="ts">
	import ArrowSwitchCard from '@/assets/icons/ArrowSwitchCard.svelte'

	let {
		svgConfig = $bindable()
	}: {
		svgConfig: {
			cardStyle: string
			bkgHexDark: string
			bkgHexLight: string
			displayBorder: boolean
			font: string
		}
	} = $props()

	const cardOptions = ['Icon + Text', 'Only Text', 'Only Icon']
	function handleCardStyle(direction: number) {
		let currentIndex = cardOptions.indexOf(svgConfig.cardStyle)
		let newIndex = (currentIndex + direction + cardOptions.length) % cardOptions.length
		svgConfig.cardStyle = cardOptions[newIndex]
	}
</script>

<section class="flex flex-col justify-between gap-y-4 p-10 text-sm">
	<article>
		<p class="font-medium">Bkg dark</p>
		<input
			bind:value={svgConfig.bkgHexDark}
			class="flex h-6 w-24 items-center justify-center rounded-full p-2 text-xs text-black outline-none"
			style="background-color: {svgConfig.bkgHexDark};"
			type="text"
		/>
	</article>

	<article>
		<p class="font-medium">Bkg light</p>
		<input
			bind:value={svgConfig.bkgHexLight}
			class="flex h-6 w-24 items-center justify-center rounded-full p-2 text-xs text-black outline-none"
			style="background-color: {svgConfig.bkgHexLight};"
			type="text"
		/>
	</article>

	<label class="flex items-center justify-between gap-x-2 hover:cursor-pointer">
		<p class="font-medium">Display border</p>
		<input type="checkbox" bind:checked={svgConfig.displayBorder} />
	</label>

	<article>
		<p class="font-medium">Font</p>
		<p class="text-xs">{svgConfig.font}</p>
	</article>

	<div
		class="flex w-full items-center justify-between rounded-full border border-[#000] p-2 dark:border-[#fff]"
	>
		<button class="p-1" onclick={() => handleCardStyle(+1)}>
			<ArrowSwitchCard />
		</button>
		<p class="font-medium italic">{svgConfig.cardStyle}</p>
		<button class="rotate-180 p-1" onclick={() => handleCardStyle(-1)}>
			<ArrowSwitchCard />
		</button>
	</div>
</section>

<style>
	article {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
