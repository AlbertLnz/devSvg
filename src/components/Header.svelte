<script>
	import Toasts from '@/components/Toasts.svelte'
	import GitHubIcon from '@/assets/icons/GitHub.svelte'
</script>

<header class="flex h-full items-center justify-between px-10">
	<Toasts />

	<a href="/">
		<h1 class="text-3xl font-bold">DevSVG</h1>
	</a>
	<div class="flex items-center justify-center gap-x-6">
		<a href="/help">
			<h4 class="text-lg">How it works</h4>
		</a>
		<a href="/support">
			<h4 class="text-lg">Support</h4>
		</a>
		<a href="https://github.com/albertlnz/devSvg" target="_blank">
			<GitHubIcon className="size-8" />
		</a>
	</div>
</header>
