<script lang="ts">
	let {
		svgConfig = $bindable()
	}: { svgConfig: { bkgHexDark: String; bkgHexLight: String; font: String } } = $props()
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

	<article>
		<p>Font</p>
		<p>{svgConfig.font}</p>
	</article>

	<div class="flex w-full items-center justify-between rounded-full bg-red-800">
		<button>Prev</button>
		<p>Only icons</p>
		<button>Post</button>
	</div>
</section>

<style>
	article {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
