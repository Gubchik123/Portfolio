<template>
	<!-- The site header -->
	<header
		class="sticky-top d-flex flex-wrap align-content-center py-3 px-sm-1 px-md-4 bg-black"
	>
		<a
			href="#"
			class="d-flex align-items-center mb-3 mb-md-0 me-auto text-decoration-none"
		>
			<ion-icon name="albums" class="ms-3 text-white"></ion-icon>
			<span class="fs-4 ms-3 text-white">Portfolio</span>
		</a>
	</header>
</template>

<script>
export default {
	name: "PageHeader",
};
</script>

<style>
header {
	opacity: 0.8;
	box-shadow: 0 10px 20px var(--bs-dark);
}
</style>
