<template>
	<span
		class="badge me-1 mb-1 cursor-pointer inline-content-center"
		:class="{
			'border bg-transparent': !active,
			'rounded-pill': type != 'stack',
			// stack badge CSS classes
			'text-bg-primary': type == 'stack' && active,
			'text-primary border-primary': type == 'stack' && !active,
			// skill badge CSS classes
			'text-bg-info': type == 'categories' && active,
			'text-info border-info': type == 'categories' && !active,
			// status badge CSS classes
			'text-bg-success':
				type == 'status' && active && option == 'Deployed',
			'text-bg-secondary':
				type == 'status' && active && option == 'Paused',
			'text-bg-danger':
				type == 'status' && active && option == 'Not deployed',
			'text-success border-success':
				type == 'status' && !active && option == 'Deployed',
			'text-secondary border-secondary':
				type == 'status' && !active && option == 'Paused',
			'text-danger border-danger':
				type == 'status' && !active && option == 'Not deployed',
		}"
	>
		{{ option }}
	</span>
</template>

<script>
export default {
	name: "BadgeComponent",
	props: {
		type: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			required: true,
		},
		option: {
			type: String,
			required: true,
		},
	},
};
</script>

<style>
.inline-content-center {
	display: inline-flex;
	justify-content: center;
	align-items: center;
}
</style>
