<script lang="ts">
	import GitHubIcon from '@/assets/icons/GitHub.svelte'

	let githubTheme = $state('dark')

	function toggleTheme() {
		githubTheme = githubTheme === 'light' ? 'dark' : 'light'
		document.body.classList.remove(githubTheme === 'light' ? 'dark' : 'light')
		document.body.classList.add(githubTheme)
	}

	// $inspect(githubTheme)
</script>

<button class="px-1" onclick={toggleTheme}>
	<GitHubIcon className={`size-4 ${githubTheme === 'light' ? 'text-black' : 'text-white'}`} />
</button>
