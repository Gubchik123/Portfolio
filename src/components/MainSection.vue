<template>
	<main class="container">
		<nav class="navbar navbar-expand-sm bg-light my-3 rounded-4">
			<div class="container-fluid">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li
						:key="menu"
						v-for="(active, menu) in menus"
						:class="{
							active: active,
							filter: activeFilters[menu].length,
						}"
						data-bs-toggle="collapse"
						@click="setMenu(menu, active)"
						:aria-controls="menu + '-collapse'"
						:data-bs-target="'#' + menu + '-collapse'"
						class="nav-item nav-link text-capitalize cursor-pointer"
					>
						{{ menu }}
					</li>
					<li
						@click="clearAllFilters"
						class="nav-item nav-link clear cursor-pointer"
					>
						Clear all
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
		<div
			class="collapse rounded-4"
			:key="filter"
			v-for="(options, filter) in filters"
			:id="filter + '-collapse'"
		>
			<div class="bg-light px-3 py-2 rounded-4 mb-3">
				<BadgeComponent
					:type="filter"
					:key="option"
					:active="active"
					:option="option"
					v-for="(active, option) in options"
					@click="setFilter(filter, option)"
				/>
			</div>
		</div>
		<transition-group name="project" tag="div" class="row d-flex flex-wrap">
			<div
				:key="project.id"
				v-for="project in list"
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
							<BadgeComponent
								:type="'status'"
								:active="filters.status[project.deploy_status]"
								:option="project.deploy_status"
								@click="
									setFilter('status', project.deploy_status)
								"
							/>
						</h5>
						<h6
							class="card-subtitle d-flex justify-content-between my-2"
						>
							<BadgeComponent
								:type="'categories'"
								:active="filters.categories[project.category]"
								:option="project.category"
								@click="
									setFilter('categories', project.category)
								"
							/>
							<a target="_blank" :href="project.repo.url">
								{{ project.repo.platform }}
							</a>
						</h6>
						<p
							class="card-text mb-2"
							v-html="project.description"
						></p>
						<div class="mt-1">
							<BadgeComponent
								:key="skill"
								v-for="skill in project.skills"
								:type="'stack'"
								:option="skill"
								:active="filters.stack[skill]"
								@click="setFilter('stack', skill)"
							/>
						</div>
					</div>
				</div>
			</div>
		</transition-group>
	</main>
</template>

<script>
import projects from "../projects";

import BadgeComponent from "./BadgeComponent.vue";

export default {
	name: "MainSection",
	components: {
		BadgeComponent,
	},
	data() {
		return {
			projects: projects,
			filters: { status: {}, categories: {}, stack: {} },
			menus: { status: false, categories: false, stack: false },
		};
	},

	computed: {
		activeMenu() {
			return Object.keys(this.menus).reduce(
				($$, set, i) => (this.menus[set] ? i : $$),
				-1
			);
		},

		list() {
			let { status, categories, stack } = this.activeFilters;

			let temp = this.projects.filter(
				({ deploy_status, category, skills }) => {
					if (status.length && !status.includes(deploy_status))
						return false;
					if (categories.length && !categories.includes(category))
						return false;
					return (
						!stack.length ||
						stack.every((skill) => skills.includes(skill))
					);
				}
			);
			console.log(temp);
			return temp;
		},

		activeFilters() {
			let { status, categories, stack } = this.filters;

			return {
				status: Object.keys(status).filter((c) => status[c]),
				categories: Object.keys(categories).filter(
					(c) => categories[c]
				),
				stack: Object.keys(stack).filter((c) => stack[c]),
			};
		},
	},

	methods: {
		setFilter(filter, option) {
			if (filter === "stack") {
				this.filters[filter][option] = !this.filters[filter][option];
			} else {
				setTimeout(() => {
					this.clearFilter(
						filter,
						option,
						this.filters[filter][option]
					);
				}, 100);
			}
		},

		clearFilter(filter, except, active) {
			Object.keys(this.filters[filter]).forEach((option) => {
				this.filters[filter][option] = except === option && !active;
			});
		},

		clearAllFilters() {
			Object.keys(this.filters).forEach(this.clearFilter);
		},

		setMenu(menu, active) {
			this.menus[menu] = !active;
		},
	},

	beforeMount() {
		this.projects.forEach(({ deploy_status, category, skills }) => {
			this.filters.status[deploy_status] = false;
			this.filters.categories[category] = false;

			skills.forEach((skill) => {
				this.filters.stack[skill] = false;
			});
		});
	},
};
</script>

<style>
@import url("../assets/css/main.css");
</style>
