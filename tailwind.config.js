import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
			display: [
				['Mona Sans', ...defaultTheme.fontFamily.sans],
				{ fontVariationSettings: '"wdth" 110' }
			]
		}
	},

	plugins: [typography, forms, containerQueries]
};
