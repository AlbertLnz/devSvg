<script lang="ts">
	let {
		githubTheme,
		svgConfig
	}: {
		githubTheme: string
		svgConfig: { bkgHexDark: string; bkgHexLight: string; displayBorder: boolean; font: string }
	} = $props()

	let bkg = $derived(() => (githubTheme === 'dark' ? svgConfig.bkgHexDark : svgConfig.bkgHexLight))
</script>

<section class="flex flex-col items-center justify-center">
	<svg xmlns="http://www.w3.org/2000/svg" width="596" height="270" fill="none">
		<!-- Rectangle -->
		<rect
			width="596"
			height="248"
			y="22"
			fill={bkg()}
			fill-opacity=".6"
			rx="10"
			stroke={bkg()}
			stroke-width={svgConfig.displayBorder ? '4' : '0'}
		/>

		<!-- Tab -->
		<path
			fill={bkg()}
			fill-opacity=".6"
			d="M16 10c0-5.523 4.477-10 10-10h368c5.523 0 10 4.477 10 10v12H16V10Z"
		/>
	</svg>

	<footer class="flex gap-x-6 text-sm">
		<button>Download SVG</button>
		<button>Copy SVG</button>
	</footer>
</section>
