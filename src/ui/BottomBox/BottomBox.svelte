<script lang="ts">
	import { cubicInOut } from "svelte/easing";
	import { fade, fly } from "svelte/transition";

	export let isOpened: boolean = false;
</script>

{#if isOpened}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="focus-background" on:click|stopPropagation|self="{() => {isOpened = false}}" transition:fade="{{duration: 200}}">
		<div class="BottomBox" transition:fly="{{y: 200, duration: 200, easing: cubicInOut}}">
			<slot />
		</div>
	</div>
{/if}

<style lang="scss">
	.BottomBox {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--box-background-color);
		border-radius: 8px 8px 0 0;
		max-height: 70vh;
		padding-top: 20px;
		padding-bottom: calc(20px + env(safe-area-inset-bottom));
	}
</style>