<script lang="ts">
	// import type { BottomBoxList } from "./types";

	interface BottomBoxList {
		[property: string]: string
	}

	export let items: BottomBoxList[];
	export let onSelect: (item: unknown) => void | undefined;

	function handleClick(item) {
		if (item.onClick) {
			return item.onClick();
		} else {
			return onSelect(item);
		}
	}

</script>

<div class="items">
	{#each items as item}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="item" on:click="{() => handleClick(item)}">
			{item.label}
		</div>
	{/each}
</div>

<style lang="scss">
	@use '../../styles/abstract/mixins' as *;
	@use '../../styles/abstract/variables' as *;

	@include desktop {
		.items {
			position: absolute;
			background-color: var(--input-background-color);
			border: 1px solid var(--input-border-color);
			border-radius: #{$inputBorderRadius};
			z-index: 10;
			top: calc(100% + 8px);
			left: 0;
			right: 0;
			box-shadow: 0 2px 8px var(--Select-items-shadow-color);
		}
	}

	.item {
		padding: 10px 15px;
		background-color: transparent;
		transition: background-color 0.2s;
		font-size: 13.5px;

		&:first-of-type {
			border-top-left-radius: #{$inputBorderRadius};
			border-top-right-radius: #{$inputBorderRadius};
		}

		&:last-of-type {
			border-bottom-left-radius: #{$inputBorderRadius};
			border-bottom-right-radius: #{$inputBorderRadius};
		}

		&:hover {
			cursor: pointer;
			background-color: var(--input-background-color-hover);
		}
	}

</style>