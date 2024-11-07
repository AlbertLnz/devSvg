<script lang="ts">
	import CopyBtnIcon from '../assets/icons/CopyBtn.svelte'
	import DownloadBtnIcon from '../assets/icons/DownloadBtn.svelte'
	import { devDependencies } from '../data/devDependencies'
	import SwitcherThemeGithub from './SwitcherThemeGithub.svelte'

	let {
		githubTheme = $bindable(),
		svgConfig,
		selected
	}: {
		githubTheme: string
		svgConfig: {
			cardStyle: string
			bkgHexDark: string
			bkgHexLight: string
			displayBorder: boolean
			font: string
		}
		selected: (typeof devDependencies)[number][]
	} = $props()

	let tabText = $state('🌟 DevSVG. Content editable, click to edit!')

	let bkg = $derived(() => (githubTheme === 'dark' ? svgConfig.bkgHexDark : svgConfig.bkgHexLight))

	function handleDownloadSVG() {
		let svg = document.getElementById('devDependenciesSvg')
		if (svg) {
			let serializer = new XMLSerializer()
			let source = serializer.serializeToString(svg)
			let blob = new Blob([source], { type: 'image/svg+xml' })
			let url = URL.createObjectURL(blob)
			let a = document.createElement('a')
			a.href = url
			a.download = 'myDevDependencies.svg'
			a.click()
			URL.revokeObjectURL(url)
		}
	}

	function handleCopySVG() {
		let svg = document.getElementById('devDependenciesSvg')
		if (svg) {
			let serializer = new XMLSerializer()
			let source = serializer.serializeToString(svg)
			navigator.clipboard.writeText(source)
		}
	}
</script>

<section class="flex flex-col items-center justify-center">
	<article id="svg-container" class="relative">
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

			{#each selected as dependency, index}
				{#if svgConfig.cardStyle === 'Icon + Text'}
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
				{:else if svgConfig.cardStyle === 'Only Icon'}
					<!-- SVG -->
					<g transform={`translate(${36 + (index % 5) * 80}, ${39 + Math.floor(index / 5) * 80})`}>
						<dependency.svg width={70} height={70} />
					</g>
				{:else if svgConfig.cardStyle === 'Only Text'}
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
				{/if}
			{/each}

			<!-- Tab -->
			<path
				fill={bkg()}
				fill-opacity=".6"
				d="M16 10c0-5.523 4.477-10 10-10h368c5.523 0 10 4.477 10 10v12H16V10Z"
			/>

			<!-- Tab text -->
			<text
				x="4%"
				y="16"
				text-anchor="start"
				font-size="11"
				fill="white"
				font-weight="500"
				font-family={svgConfig.font}
			>
				{tabText}
			</text>
		</svg>

		<input
			type="text"
			class="absolute left-6 top-1 w-[63%] overflow-x-hidden bg-transparent font-mono text-[11px] opacity-0 focus:text-transparent focus:caret-white focus:opacity-100 focus:outline-none"
			maxlength={56}
			bind:value={tabText}
		/>

		<div class="absolute right-0 top-0 flex gap-x-2 pr-1 text-sm">
			<button onclick={handleDownloadSVG} class="px-1"
				><DownloadBtnIcon
					className={`size-4 ${githubTheme === 'light' ? 'text-black' : 'text-white'}`}
				/></button
			>
			<button onclick={handleCopySVG} class="px-1"
				><CopyBtnIcon
					className={`size-4 ${githubTheme === 'light' ? 'text-black' : 'text-white'}`}
				/></button
			>

			<SwitcherThemeGithub bind:githubTheme />
		</div>
	</article>
</section>
