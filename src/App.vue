<template>
	<PageHeader />
	<MainSection />
	<GoToTopButton />
	<PageFooter />
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import MainSection from "./components/MainSection.vue";
import GoToTopButton from "./components/GoToTopButton.vue";
import PageFooter from "./components/PageFooter.vue";

export default {
	name: "App",
	components: {
		PageHeader,
		MainSection,
		GoToTopButton,
		PageFooter,
	},
};
</script>

<style>
@import url("./assets/style.css");
</style>
