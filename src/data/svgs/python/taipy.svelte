<script lang="ts">
	let {
		className,
		width = 30,
		height = 30
	}: { className?: string; width?: number; height?: number } = $props()
</script>

<svg class={className} {width} {height} fill="none" viewBox="0 0 40 28">
	<path
		fill="#FF371A"
		d="M2.425 1.071A1.6 1.6 0 0 1 3.935 0h35.137a.8.8 0 0 1 .755 1.064L37.776 6.93A1.6 1.6 0 0 1 36.265 8H1.128a.8.8 0 0 1-.756-1.064zm8 10A1.6 1.6 0 0 1 11.935 10h13.737a.8.8 0 0 1 .755 1.064l-2.052 5.865A1.6 1.6 0 0 1 22.865 18H9.128a.8.8 0 0 1-.755-1.064zm4.445 10A1.6 1.6 0 0 1 16.38 20h5.738a.8.8 0 0 1 .755 1.064L20.82 26.93A1.6 1.6 0 0 1 19.31 28h-5.737a.8.8 0 0 1-.755-1.064z"
	/>
</svg>
