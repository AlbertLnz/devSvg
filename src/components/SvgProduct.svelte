<script lang="ts">
	import { devDependencies } from '../data/devDependencies'

	let {
		githubTheme,
		svgConfig,
		selected
	}: {
		githubTheme: string
		svgConfig: { bkgHexDark: string; bkgHexLight: string; displayBorder: boolean; font: string }
		selected: (typeof devDependencies)[number][]
	} = $props()

	let bkg = $derived(() => (githubTheme === 'dark' ? svgConfig.bkgHexDark : svgConfig.bkgHexLight))

	function handleDownloadSVG() {
		let svg = document.querySelector('svg')
		if (svg) {
			let serializer = new XMLSerializer()
			let source = serializer.serializeToString(svg)
			let blob = new Blob([source], { type: 'image/svg+xml' })
			let url = URL.createObjectURL(blob)
			let a = document.createElement('a')
			a.href = url
			a.download = 'devsvg.svg'
			a.click()
			URL.revokeObjectURL(url)
		}
	}

	function handleCopySVG() {
		let svg = document.querySelector('svg')
		if (svg) {
			let serializer = new XMLSerializer()
			let source = serializer.serializeToString(svg)
			navigator.clipboard.writeText(source)
		}
	}
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

		{#each selected as dependency, index}
			<g>
				<rect
					x={36 + (index % 5) * 80}
					y={39 + Math.floor(index / 5) * 80}
					width="70"
					height="70"
					rx="10"
					fill="#D9D9D9"
				/>
				<foreignObject
					x={36 + (index % 5) * 80}
					y={39 + Math.floor(index / 5) * 80}
					width="70"
					height="70"
				>
					<div
						class="flex h-full w-full flex-col items-center justify-between p-3 text-xs text-black"
					>
						{@html dependency.svg}
						<p>{dependency.name}</p>
					</div>
				</foreignObject>
			</g>
		{/each}

		<!-- Tab -->
		<path
			fill={bkg()}
			fill-opacity=".6"
			d="M16 10c0-5.523 4.477-10 10-10h368c5.523 0 10 4.477 10 10v12H16V10Z"
		/>
	</svg>

	<footer class="flex gap-x-6 text-sm">
		<button onclick={handleDownloadSVG}>Download SVG</button>
		<button onclick={handleCopySVG}>Copy SVG</button>
	</footer>
</section>
