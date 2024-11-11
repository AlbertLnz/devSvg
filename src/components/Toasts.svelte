<script lang="ts">
	import Toast from './Toast.svelte'
	import { toasts } from '@/data/store'
</script>

{#if $toasts}
	<section>
		{#each $toasts as toast (toast.id)}
			<Toast id={toast.id} type={toast.type} dismissible={toast.dismissible}>
				{toast.message}
			</Toast>
		{/each}
	</section>
{/if}

<style lang="postcss">
	section {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		display: flex;
		margin-top: 1rem;
		justify-content: center;
		flex-direction: column;
		z-index: 1000;
	}
</style>
