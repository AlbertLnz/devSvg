<script lang="ts">
	import ArrowSwitchCard from '../assets/icons/ArrowSwitchCard.svelte'

	let {
		githubTheme,
		svgConfig = $bindable()
	}: {
		githubTheme: string
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

<section class="flex flex-col gap-y-4 px-8 py-4 text-sm">
	<article>
		<p>Bkg dark</p>
		<input
			bind:value={svgConfig.bkgHexDark}
			class="text-blac flex h-6 w-20 items-center justify-center rounded-full p-2 text-black outline-none"
			style="background-color: {svgConfig.bkgHexDark};"
			type="text"
		/>
	</article>

	<article>
		<p>Bkg light</p>
		<input
			bind:value={svgConfig.bkgHexLight}
			class="flex h-6 w-20 items-center justify-center rounded-full p-2 text-black outline-none"
			style="background-color: {svgConfig.bkgHexLight};"
			type="text"
		/>
	</article>

	<label class="flex items-center justify-between gap-x-2">
		<p>Display border</p>
		<input type="checkbox" bind:checked={svgConfig.displayBorder} />
	</label>

	<article>
		<p>Font</p>
		<p>{svgConfig.font}</p>
	</article>

	<div class="flex w-full items-center justify-between rounded-full">
		<button onclick={() => handleCardStyle(+1)}>
			<ArrowSwitchCard {githubTheme} />
		</button>
		<p>{svgConfig.cardStyle}</p>
		<button class="rotate-180" onclick={() => handleCardStyle(-1)}>
			<ArrowSwitchCard {githubTheme} />
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
