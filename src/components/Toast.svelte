<script lang="ts">
	import Cross from '@/assets/icons/Cross.svelte'
	import DownloadBtn from '@/assets/icons/DownloadBtn.svelte'
	import { dismissToast } from '@/data/store'
	import { fade } from 'svelte/transition'

	let {
		id,
		type,
		dismissible
	}: {
		id: number
		type: string
		dismissible: boolean
	} = $props()
</script>

<article
	class="mx-auto flex w-1/5 items-center justify-between rounded-md bg-[#584482] px-6 py-3"
	role="alert"
	transition:fade
>
	{#if type === 'success'}
		<DownloadBtn className="size-4" />
	{/if}

	<div>
		<slot />
	</div>

	{#if dismissible}
		<button onclick={() => dismissToast(id)}>
			<Cross className="size-4" />
		</button>
	{/if}
</article>
