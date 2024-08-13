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
			<div class="bg-light p-4 rounded-4 mb-3">
				<span
					:key="option"
					v-for="(active, option) in options"
					@click="setFilter(filter, option)"
					class="badge me-1 mb-1 cursor-pointer"
					:class="{
						'text-primary border border-primary bg-transparent':
							!active,
						'text-white bg-primary': active,
					}"
				>
					{{ option }}
				</span>
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
								class="badge me-1 mb-1"
								:class="{
									'text-primary border border-primary bg-transparent':
										!filters.stack[skill],
									'text-white bg-primary':
										filters.stack[skill],
								}"
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
main {
	flex: 1;
}

.cursor-pointer {
	cursor: pointer;
}

.nav-link::after {
	content: "\00d7";
	display: inline-block;
	color: transparent;
	width: 0.5rem;
	font-weight: 400;
	transform: scale(0);
	transition: transform 150ms ease-in-out;
}
.nav-link.clear {
	color: #f68185;
	opacity: 0;
	transform: translate3d(-25%, 0, 0);
	pointer-events: none;
	transition: all 275ms ease-in-out;
}
.nav-link.filter ~ .nav-link.clear {
	opacity: 1;
	transform: translate3d(0, 0, 0);
	pointer-events: auto;
}
.nav-link.filter::after,
.nav-link.active::after {
	transform: scale(1);
}
.nav-link.filter::after {
	content: "\2022";
	color: #46d2c4;
}
.nav-link.active::after {
	content: "\00d7";
	color: #f68185;
}

.row a[href="javascript:void(0)"] {
	opacity: 1;
	cursor: unset;
	text-decoration: none;
}
.row a[href="javascript:void(0)"]:hover {
	color: unset;
}
</style>
