<script lang="ts">
	import GitHubIcon from '../assets/icons/GitHub.svelte'
	import PreviewIcon from '../assets/icons/Preview.svelte'

	let { githubTheme = $bindable() } = $props()

	let previewIconColor = $derived(() => (githubTheme === 'dark' ? '#fff' : '#000'))
</script>

<div class="absolute bottom-0 right-0 flex items-center justify-center p-2">
	<button class="px-4 py-2">
		<PreviewIcon className="size-6" hexColor={previewIconColor()} />
	</button>
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
