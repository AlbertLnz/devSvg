<script lang="ts">
	import type { devDependencies } from '@/data/devDependencies'

	let {
		dependency,
		index,
		svgConfig
	}: {
		dependency: (typeof devDependencies)[number]
		index: number
		svgConfig: {
			cardStyle: string
			bkgHexDark: string
			bkgHexLight: string
			displayBorder: boolean
			font: string
		}
	} = $props()
</script>

<g>
	<!-- RECT -->
	<rect
		x={36 + (index % 5) * 65 + 10}
		y={39 + Math.floor(index / 5) * 65}
		width="50"
		height="30"
		rx="5"
		fill="url(#myGradient)"
	/>

	<!-- TEXT -->
	<text
		x={36 + (index % 5) * 65 + 35}
		y={39 + Math.floor(index / 5) * 65 + 20}
		text-anchor="middle"
		font-size="10"
		fill="white"
		font-weight="500"
		font-family={svgConfig.font}
	>
		{dependency.name}
	</text>
</g>
