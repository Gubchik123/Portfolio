<template>
	<main class="container my-3">
		<transition-group name="project" tag="div" class="row d-flex flex-wrap">
			<div
				:key="project.id"
				v-for="project in projects"
				class="col-lg-4 col-md-6 col-sm-12 mb-3"
			>
				<div :id="project.id" class="card h-100 shadow-lg">
					<a
						target="_blank"
						:href="project.url ? project.url : 'javascript:void(0)'"
					>
						<img
							class="card-img-top"
							:src="project.header_image"
							:alt="project.name + ' header image'"
						/>
					</a>
					<div
						class="card-body d-flex flex-column justify-content-between"
					>
						<h5 class="card-title d-flex justify-content-between">
							<a
								target="_blank"
								:href="
									project.url
										? project.url
										: 'javascript:void(0)'
								"
								>{{ project.name }}</a
							>
							<a
								target="_blank"
								:href="
									project.url
										? project.url
										: 'javascript:void(0)'
								"
								class="badge rounded-pill content-center text-decoration-none"
								:class="{
									'text-bg-success':
										project.deploy_status === 'Deployed',
									'text-bg-secondary':
										project.deploy_status === 'Paused',
									'text-bg-danger':
										project.deploy_status ===
										'Not deployed',
								}"
							>
								{{ project.deploy_status }}
							</a>
						</h5>
						<h6
							class="card-subtitle d-flex justify-content-between my-2"
						>
							<span>
								{{ project.category }}
							</span>
							<a target="_blank" :href="project.repo.url">
								{{ project.repo.platform }}
							</a>
						</h6>
						<p
							class="card-text mb-2"
							v-html="project.description"
						></p>
						<div class="my-0">
							<span
								:key="skill"
								v-for="skill in project.skills"
								class="badge text-bg-primary me-1"
							>
								{{ skill }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</transition-group>
	</main>
</template>

<script>
import projects from "../projects";

export default {
	name: "MainSection",
	data() {
		return {
			projects: projects,
		};
	},
};
</script>

<style>
main {
	flex: 1;
}
a[href="javascript:void(0)"] {
	opacity: 1;
	cursor: unset;
	text-decoration: none;
}
a[href="javascript:void(0)"]:hover {
	color: unset;
}
</style>
