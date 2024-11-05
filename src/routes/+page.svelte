<script>
	import Selector from '../components/Selector.svelte'
	import Swapy from '../components/Swapy.svelte'
</script>

<header>
	<h1>DevSvg</h1>
</header>

<main class="grid grid-cols-[0.3fr_auto_0.2fr] border-y-4 border-y-[#9E66FF]/40 bg-[#2A2D2E] p-4">
	<Swapy />
	<p>Welcome to SvelteKit</p>
	<p>Welcome to SvelteKit</p>
</main>

<footer class="grid grid-cols-[0.3fr_auto]">
	<nav>Nav</nav>
	<Selector />
</footer>
