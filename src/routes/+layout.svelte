<script lang="ts">
	import Footer from "../ui/Footer.svelte";
	import Header from "../ui/Header.svelte";
</script>

<div class="Content vertical-flex space big">
	<Header />
		<div class="Body wrapper w900 vertical-flex space big">
			<slot></slot>
		</div>
	<Footer />
</div>

<style lang="scss">
	.Content {
		min-height: 100vh;
	}

	.Body {
		flex: 1;
	}
</style>