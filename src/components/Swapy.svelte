<script>
	import { createSwapy } from 'swapy'
	import { onMount } from 'svelte'

	let swapy

	onMount(() => {
		const container = document.querySelector('.container')

		if (container) {
			swapy = createSwapy(container, {
				animation: 'spring'
			})
			swapy.enable(true)
		}
	})
</script>

<div class="container flex flex-col gap-y-4 p-4">
	<div class="section-1" data-swapy-slot="foo">
		<div class="border-2 border-[#fff] p-4" data-swapy-item="a">
			<p>FIRST ELEMENT</p>
		</div>
	</div>

	<div class="section-2" data-swapy-slot="bar">
		<div class="border-2 border-[#fff] p-4" data-swapy-item="b">
			<p>SECOND ELEMENT</p>
		</div>
	</div>

	<div class="section-3" data-swapy-slot="baz">
		<div class="border-2 border-[#fff] p-4" data-swapy-item="c">
			<p>THIRD ELEMENT</p>
		</div>
	</div>
</div>
