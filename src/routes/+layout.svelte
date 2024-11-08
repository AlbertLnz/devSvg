<script lang="ts">
	import ViewTransition from '@/routes/navigation.svelte'
	import '@/app.css'
	import { onMount } from 'svelte'
	import Header from '@/components/Header.svelte'
	let { children } = $props()

	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.add('light')
		}
	})
</script>

<ViewTransition />
<Header />
{@render children()}
