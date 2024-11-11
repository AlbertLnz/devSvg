<script lang="ts">
	let {
		className,
		width = 30,
		height = 30
	}: { className?: string; width?: number; height?: number } = $props()
</script>

<svg class={className} {width} {height} viewBox="0 0 750 192"
	><g fill="#fff"
		><path
			d="m14 0 78.5 190L171 0h-38L92.5 106.2 52 0ZM196 0v188h35V0ZM297 188 405 0h-39L258.5 188ZM465.5 188l108-188h-39L427 188ZM597.5 0v120c0 42.5 33 72 70.75 71.5C704.5 192 738.72 162 739 120V0h-35v120c-.24 24.13-13.36 38.5-35.75 38.5-22.11.15-35.75-14-35.75-38.5V0Z"
		/><circle cx="286.5" cy="24.75" r="24.5" /><circle cx="455" cy="24.75" r="24.5" /><circle
			cx="380.5"
			cy="163"
			r="24.5"
		/><circle cx="549" cy="163" r="24.5" /></g
	></svg
>
