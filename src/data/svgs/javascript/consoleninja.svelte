<script lang="ts">
	let {
		className,
		width = 30,
		height = 30
	}: { className?: string; width?: number; height?: number } = $props()
</script>

<svg class={className} {width} {height} viewBox="0 0 256 256">
	<rect
		width="240"
		height="240"
		x="8"
		y="8"
		rx="75"
		ry="100"
		style="fill:#000;fill-opacity:1;stroke:#c8c8c8;stroke-width:15"
	/>
	<rect
		width="172"
		height="100"
		x="42"
		y="78"
		rx="42"
		ry="42"
		style="display:block;fill:#ffd55c;fill-opacity:1"
	/>
	<path stroke="#000" stroke-width="22" d="M142 128h45" /><path
		stroke="#000"
		stroke-width="20"
		d="m74 102 33 33M74 154l33-33"
	/>
</svg>
