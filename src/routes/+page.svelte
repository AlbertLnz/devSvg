<script lang="ts">
	import SearchNav from '@/components/SearchNav.svelte'
	import Selector from '@/components/Selector.svelte'
	import SvgConfiguration from '@/components/SvgConfiguration.svelte'
	import SvgProduct from '@/components/SvgProduct.svelte'
	import Swapy from '@/components/Swapy.svelte'
	import { devDependencies } from '@/data/devDependencies'

	let assignCategory = $state(['Python'])
	let filteredDevDependencies = $state(
		devDependencies.filter((item) => item.language.some((lang) => assignCategory.includes(lang)))
	)
	let selected: (typeof devDependencies)[number][] = $state([])
	let svgConfig = $state({
		cardStyle: 'Icon + Text',
		bkgHexDark: '#FFD9718D',
		bkgHexLight: '#F2CA55',
		displayBorder: false,
		font: 'monospace'
	})

	function handleSelected(dependency: (typeof devDependencies)[number]) {
		selected = !selected.some((item) => item.name === dependency.name)
			? [...selected, dependency]
			: selected.filter((item) => item.name !== dependency.name)
	}

	function handleAssignCategory(categories: string[]) {
		assignCategory = categories
		filteredDevDependencies = devDependencies.filter((item) =>
			item.language.some((lang) => categories.includes(lang))
		)
	}

	// $inspect(svgConfig)
</script>

<main
	class="relative grid grid-cols-[0.2fr_0.6fr_0.2fr] overflow-y-hidden border-y-4 border-y-[#9E66FF]/90 bg-[#FFFFFF] p-4 text-black dark:border-y-[#9E66FF]/40 dark:bg-[#2A2D2E] dark:text-white"
>
	<Swapy {selected} {handleSelected} />
	<SvgProduct {svgConfig} {selected} />
	<SvgConfiguration bind:svgConfig />
</main>

<footer class="w-full">
	<SearchNav {assignCategory} {handleAssignCategory} />
	<Selector {filteredDevDependencies} {selected} {handleSelected} />
</footer>
