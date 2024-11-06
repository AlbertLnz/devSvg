<script lang="ts">
	import GitHubIcon from '../assets/icons/GitHub.svelte'

	let { githubTheme = $bindable() } = $props()
</script>

<div class="absolute bottom-0 right-0 flex p-2">
	<button
		class={`px-4 py-2 ${githubTheme === 'light' ? 'bg-red-800' : ''}`}
		onclick={() => (githubTheme = 'light')}
	>
		<GitHubIcon className="size-6" hexColor="#fff" />
	</button>
	<button
		class={`px-4 py-2 ${githubTheme === 'dark' ? 'bg-red-800' : ''}`}
		onclick={() => (githubTheme = 'dark')}
	>
		<GitHubIcon className="size-6" hexColor="#000" />
	</button>
</div>
