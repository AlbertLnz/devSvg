<script lang="ts">
	import Header from '../components/Header.svelte'
	import SearchNav from '../components/SearchNav.svelte'
	import Selector from '../components/Selector.svelte'
	import SvgConfiguration from '../components/SvgConfiguration.svelte'
	import SvgProduct from '../components/SvgProduct.svelte'
	import Swapy from '../components/Swapy.svelte'
	import SwitcherThemeGithub from '../components/SwitcherThemeGithub.svelte'
	import { devDependencies } from '../data/devDependencies'

	let assignCategory = $state('Python')
	let filteredDevDependencies = $state(
		devDependencies.filter((item) => item.language === assignCategory)
	)
	let selected: (typeof devDependencies)[number][] = $state([])
	let svgConfig = $state({
		cardStyle: 'Icon + Text',
		bkgHexDark: '#9E66FF',
		bkgHexLight: '#FD4932',
		displayBorder: false,
		font: 'Roboto'
	})
	let githubTheme = $state('dark')

	function handleSelected(dependency: (typeof devDependencies)[number]) {
		selected = !selected.some((item) => item.name === dependency.name)
			? [...selected, dependency]
			: selected.filter((item) => item.name !== dependency.name)
	}

	function handleAssignCategory(category: string) {
		assignCategory = category
		filteredDevDependencies = devDependencies.filter((item) => item.language === category)
	}

	// $inspect(assignCategory)
</script>

<Header />

<main
	class={`relative grid grid-cols-[0.2fr_0.6fr_0.2fr] overflow-y-hidden border-y-4 border-y-[#9E66FF]/40 p-4 ${githubTheme === 'dark' ? 'bg-[#2A2D2E]' : 'bg-[#FFFFFF] text-black'}`}
>
	<Swapy {selected} {handleSelected} />
	<SvgProduct {githubTheme} {svgConfig} {selected} />
	<SvgConfiguration {githubTheme} bind:svgConfig />
	<SwitcherThemeGithub bind:githubTheme />
</main>

<footer class="grid grid-cols-[25%_75%]">
	<SearchNav {assignCategory} {handleAssignCategory} />
	<Selector {filteredDevDependencies} {selected} {handleSelected} />
</footer>
