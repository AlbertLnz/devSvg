<script lang="ts">
	import type { devDependencies } from '@/data/devDependencies'

	let {
		dependency,
		index
	}: {
		dependency: (typeof devDependencies)[number]
		index: number
	} = $props()
</script>

<g transform={`translate(${36 + (index % 5) * 80}, ${39 + Math.floor(index / 5) * 80})`}>
	<dependency.svg width={70} height={70} />
</g>
