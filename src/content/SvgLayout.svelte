<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		children,
		githubTheme,
		svgConfig
	}: {
		children: Snippet
		githubTheme: string
		svgConfig: {
			cardStyle: string
			bkgHexDark: string
			bkgHexLight: string
			displayBorder: boolean
			font: string
		}
	} = $props()

	let bkg = $derived(() => (githubTheme === 'dark' ? svgConfig.bkgHexDark : svgConfig.bkgHexLight))
</script>

<svg id="devDependenciesSvg" width="596" height="270" fill="none">
	<!-- Gradient -->
	<defs>
		<linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" style="stop-color:#B656A4; stop-opacity:1" />
			<stop offset="60%" style="stop-color:#8A37DC; stop-opacity:1" />
		</linearGradient>
	</defs>

	<!-- Rectangle -->
	<rect
		width="596"
		height="248"
		y="22"
		fill={bkg()}
		fill-opacity="1"
		rx="8"
		stroke={bkg()}
		stroke-width={svgConfig.displayBorder ? '2' : '0'}
	/>

	{@render children()}
</svg>
