<script lang="ts">
	import '@/app.css'
	let { children } = $props()

	$effect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.add('light')
		}
	})
</script>

{@render children()}
