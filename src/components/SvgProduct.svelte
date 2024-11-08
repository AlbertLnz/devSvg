<script lang="ts">
	import CopyBtnIcon from '@/assets/icons/CopyBtn.svelte'
	import DownloadBtnIcon from '@/assets/icons/DownloadBtn.svelte'
	import { devDependencies } from '@/data/devDependencies'
	import SwitcherThemeGithub from '@/components/SwitcherThemeGithub.svelte'
	import SvgLayout from '@/content/SvgLayout.svelte'
	import IconText from '@/content/IconText.svelte'
	import OnlyIcon from '@/content/OnlyIcon.svelte'
	import OnlyText from '@/content/OnlyText.svelte'

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
		<SvgLayout {svgConfig} {tabText}>
			{#each selected as dependency, index}
				{#if svgConfig.cardStyle === 'Icon + Text'}
					<IconText {dependency} {index} {svgConfig} />
				{:else if svgConfig.cardStyle === 'Only Icon'}
					<OnlyIcon {dependency} {index} />
				{:else if svgConfig.cardStyle === 'Only Text'}
					<OnlyText {dependency} {index} {svgConfig} />
				{/if}
			{/each}
		</SvgLayout>

		<input
			type="text"
			class="absolute left-6 top-1 w-[63%] overflow-x-hidden bg-transparent font-mono text-[11px] opacity-0 focus:text-transparent focus:caret-white focus:opacity-100 focus:outline-none"
			maxlength={56}
			bind:value={tabText}
		/>

		<div class="absolute right-0 top-0 flex gap-x-2 pr-1 text-sm">
			<button onclick={handleDownloadSVG} class="px-1"
				><DownloadBtnIcon className="size-4 text-black dark:text-white" />
			</button>
			<button onclick={handleCopySVG} class="px-1"
				><CopyBtnIcon className="size-4 text-black dark:text-white" />
			</button>
			<SwitcherThemeGithub bind:githubTheme />
		</div>
	</article>
</section>
