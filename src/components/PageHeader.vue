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

		<ul class="nav top-menu">
			<li class="nav-item">
				<a target="_blank" class="nav-link" href="https://hubariev.com">
					CV site
				</a>
			</li>
		</ul>
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

.top-menu a,
.top-menu a:hover {
	color: var(--bs-light);
}
.top-menu li a::after {
	content: "";
	display: block;
	width: 100%;
	background-color: var(--bs-light);
	height: 1px;
	transition: all 0.5s;
	transform: scale(0);
}
.top-menu li a:hover::after {
	transform: scale(1);
}
</style>
