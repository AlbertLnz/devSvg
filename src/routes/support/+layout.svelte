<script lang="ts">
	import ViewTransition from '@/routes/navigation.svelte'
	import '@/app.css'
	let { children } = $props()
</script>

<ViewTransition />
{@render children()}
