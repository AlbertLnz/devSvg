<script lang="ts">
	import Header from '../components/Header.svelte'
	import SearchNav from '../components/SearchNav.svelte'
	import Selector from '../components/Selector.svelte'
	import SvgConfiguration from '../components/SvgConfiguration.svelte'
	import SvgProduct from '../components/SvgProduct.svelte'
	import Swapy from '../components/Swapy.svelte'
	import SwitcherThemeGithub from '../components/SwitcherThemeGithub.svelte'
	import { devDependencies } from '../data/devDependencies'

	let selected: (typeof devDependencies)[number]['name'][] = $state([])
	let svgConfig = $state({
		bkgHexDark: '#9E66FF',
		bkgHexLight: '#FD4932',
		font: 'Roboto'
	})
	let githubTheme = $state('dark')

	function handleSelected(dependency: (typeof devDependencies)[number]['name']) {
		selected = !selected.includes(dependency)
			? [...selected, dependency]
			: selected.filter((item) => item !== dependency)
	}

	// $inspect(svgConfig)
</script>

<Header />

<main
	class={`relative grid grid-cols-[0.2fr_0.6fr_0.2fr] overflow-y-hidden border-y-4 border-y-[#9E66FF]/40 p-4 ${githubTheme === 'dark' ? 'bg-[#2A2D2E]' : 'bg-[#FFFFFF] text-black'}`}
>
	<Swapy {selected} />
	<SvgProduct {githubTheme} {svgConfig} />
	<SvgConfiguration bind:svgConfig />
	<SwitcherThemeGithub bind:githubTheme />
</main>

<footer class="grid grid-cols-[0.3fr_auto]">
	<SearchNav />
	<Selector {selected} {handleSelected} />
</footer>
