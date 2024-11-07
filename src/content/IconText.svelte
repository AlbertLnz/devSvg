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
	<!-- PRINCIPAL RECT -->
	<rect
		x={36 + (index % 5) * 80}
		y={39 + Math.floor(index / 5) * 80}
		width="70"
		height="70"
		rx="10"
		fill="url(#myGradient)"
	/>

	<!-- TEXT -->
	<text
		x={36 + (index % 5) * 80 + 35}
		y={39 + Math.floor(index / 5) * 80 + 60}
		text-anchor="middle"
		font-size="10"
		fill="white"
		font-weight="500"
		font-family={svgConfig.font}
	>
		{dependency.name}
	</text>

	<!-- SECONDARY RECT -->
	<rect
		x={36 + (index % 5) * 80 + 10}
		y={39 + Math.floor(index / 5) * 80}
		width="50"
		height="45"
		rx="5"
		fill="transparent"
	/>

	<!-- SVG -->
	<g
		transform={`translate(${36 + (index % 5) * 80 + 20}, ${39 + Math.floor(index / 5) * 80 + 15})`}
	>
		<dependency.svg className="size-7" />
	</g>
</g>
