<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		children,
		tabText,
		svgConfig
	}: {
		children: Snippet
		tabText: string
		svgConfig: {
			cardStyle: string
			bkgHexDark: string
			bkgHexLight: string
			displayBorder: boolean
			font: string
		}
	} = $props()
</script>

<svg
	id="devDependenciesSvg"
	width="596"
	height="270"
	fill="none"
	style="--bkg-light: {svgConfig.bkgHexLight}; --bkg-dark: {svgConfig.bkgHexDark}"
>
	<!-- Theme Media Query -->
	<style>
		#tabTxt {
			fill: black;
		}
		#mainRect,
		#tabPath {
			fill: var(--bkg-light);
			stroke: var(--bkg-light);
		}

		@media (prefers-color-scheme: dark) {
			#tabTxt {
				fill: white;
			}
			#mainRect,
			#tabPath {
				fill: var(--bkg-dark);
				stroke: var(--bkg-dark);
			}
		}
	</style>

	<!-- Gradient -->
	<defs>
		<linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" style="stop-color:#B656A4; stop-opacity:1" />
			<stop offset="60%" style="stop-color:#8A37DC; stop-opacity:1" />
		</linearGradient>
	</defs>

	<!-- Rectangle -->
	<rect
		id="mainRect"
		width="596"
		height="248"
		y="22"
		fill="currentColor"
		fill-opacity="1"
		rx="8"
		stroke="currentColor"
		stroke-width={svgConfig.displayBorder ? '2' : '0'}
	/>

	{@render children()}

	<!-- Tab -->
	<path
		id="tabPath"
		fill="currentColor"
		fill-opacity=".6"
		d="M16 10c0-5.523 4.477-10 10-10h368c5.523 0 10 4.477 10 10v12H16V10Z"
	/>

	<!-- Tab text -->
	<text
		id="tabTxt"
		x="4%"
		y="16"
		text-anchor="start"
		font-size="11"
		fill="currentColor"
		font-weight="500"
		font-family={svgConfig.font}
	>
		{tabText}
	</text>
</svg>
