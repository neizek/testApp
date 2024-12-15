<script lang="ts">
	import Footer from "../ui/Footer.svelte";
</script>

<div class="Page wrapper w1000 vertical-flex space big">
	<slot></slot>
	<Footer />
</div>

<style lang="scss">
	.Page {
		margin-top: 50px;
	}
</style>