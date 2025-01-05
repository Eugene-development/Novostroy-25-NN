import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				pulse: 'pulse var(--duration) ease-out infinite'
			},
			fontFamily: {
				sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
				display: [
					['Mona Sans', ...defaultTheme.fontFamily.sans],
					{ fontVariationSettings: '"wdth" 110' }
				]
			},
			animation: {
				shine: 'shine 2s linear infinite',
				flip: 'flip 6s infinite steps(2, end)',
				kitrotate: 'kitrotate 3s linear infinite both'
			},
			keyframes: {
				shine: {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				flip: {
					to: {
						transform: 'rotate(360deg)'
					}
				},
				kitrotate: {
					to: {
						transform: 'rotate(90deg)'
					}
				},
				pulse: {
					'0%, 100%': { boxShadow: '0 0 0 0 var(--pulse-color)' },
					'50%': { boxShadow: '0 0 0 8px var(--pulse-color)' }
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries, require('tailwindcss-animated')]
};
