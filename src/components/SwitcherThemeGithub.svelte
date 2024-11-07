<script lang="ts">
	import GitHubIcon from '../assets/icons/GitHub.svelte'

	let { githubTheme = $bindable() } = $props()

	// $inspect(githubTheme)
</script>

<button class="px-1" onclick={() => (githubTheme = githubTheme === 'light' ? 'dark' : 'light')}>
	<GitHubIcon className={`size-4 ${githubTheme === 'light' ? 'text-black' : 'text-white'}`} />
</button>
