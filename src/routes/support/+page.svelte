<script>
	import buyMeCoffee from '@/assets/imgs/buymeacoffee.webp'
</script>

<section
	class="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-4 p-16 py-4 md:grid-cols-2"
>
	<article
		class="flex h-[100%] flex-col items-center justify-start rounded-lg border-4 border-white p-4"
	>
		<div class="relative flex h-full w-full flex-col items-center justify-start gap-x-4">
			<h2 class="text-center text-xl">Support by buying me a coffee</h2>
			<a href="https://www.buymeacoffee.com/albertlnz" class="mt-8 bg-red-400 px-12 py-2">
				Support
			</a>
			<div class="absolute bottom-0 left-0 flex w-full items-end justify-start gap-x-2">
				<img
					src="https://avatars.githubusercontent.com/u/120119395?v=4"
					class="size-12 rounded-full"
					alt="albertlnz"
				/>
				<p class="text-sm font-medium italic">AlbertLnz</p>
			</div>
			<img src={buyMeCoffee} class="absolute bottom-0 right-0 size-20" alt="coffee" />
		</div>
	</article>

	<article
		class="flex h-[100%] flex-col items-center justify-start rounded-lg border-4 border-white p-4"
	>
		<h2 class="text-center text-xl">Support the project on GitHub</h2>

		<a href="https://github.com/albertlnz/devsvg" class="mt-8 bg-yellow-700 px-12 py-2"
			>Get a star on GitHub</a
		>
	</article>
</section>
