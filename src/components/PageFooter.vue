<template>
	<!-- The site footer -->
	<footer class="py-4 bg-black mt-5">
		<div class="container">
			<div class="row">
				<!-- The block with my social network links -->
				<div class="col-12 text-center social_networks">
					<!-- The link to my profile on "GitHub" -->
					<a
						target="_blank"
						class="btn btn-outline-light"
						href="https://github.com/Gubchik123"
					>
						<ion-icon name="logo-github"></ion-icon>
					</a>
					<!-- The link to my profile on "LinkedIn" -->
					<a
						target="_blank"
						class="btn btn-outline-light ms-2"
						href="https://www.linkedin.com/in/nikita-hubariev/"
					>
						<ion-icon name="logo-linkedin"></ion-icon>
					</a>
					<!-- The link to my profile on "Instagram" -->
					<a
						target="_blank"
						class="btn btn-outline-light ms-2"
						href="https://www.instagram.com/notwhale.1746/"
					>
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
					<!-- The link to my profile on "Telegram" -->
					<a
						target="_blank"
						href="https://t.me/Gubchik123"
						class="btn btn-outline-light ms-2"
					>
						<ion-icon name="navigate-circle"></ion-icon>
					</a>
					<!-- The link to my profile on "Twitter" -->
					<a
						target="_blank"
						class="btn btn-outline-light ms-2"
						href="https://twitter.com/Gubchik123"
					>
						<ion-icon name="logo-twitter"></ion-icon>
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "PageFooter",
};
</script>

<style>
footer {
	z-index: 70;
	opacity: 0.8;
	position: relative;
}

@media screen and (max-width: 375px) {
	.social_networks a ion-icon {
		font-size: 1.3em;
	}
}
@media screen and (max-width: 560px) {
	footer {
		z-index: 90;
	}
}
</style>
