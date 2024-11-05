<script lang="ts">
	import Header from '../components/Header.svelte'
	import SearchNav from '../components/SearchNav.svelte'
	import Selector from '../components/Selector.svelte'
	import Swapy from '../components/Swapy.svelte'
	import { devDependencies } from '../data/devDependencies'

	let selected: (typeof devDependencies)[number]['name'][] = $state([])

	function handleSelected(dependency: (typeof devDependencies)[number]['name']) {
		selected = !selected.includes(dependency)
			? [...selected, dependency]
			: selected.filter((item) => item !== dependency)
	}

	// $inspect(selected)
</script>

<Header />

<main
	class="grid grid-cols-[0.3fr_0.5fr_0.2fr] overflow-y-hidden border-y-4 border-y-[#9E66FF]/40 bg-[#2A2D2E] p-4"
>
	<Swapy {selected} />
	<p>Welcome to SvelteKit</p>
	<p>Welcome to SvelteKit</p>
</main>

<footer class="grid grid-cols-[0.3fr_auto]">
	<SearchNav />
	<Selector {selected} {handleSelected} />
</footer>
