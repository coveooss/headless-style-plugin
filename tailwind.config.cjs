module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#1372ec',
				'primary-variant': '#215cd3',
				'on-primary': '#ffffff',
				secondary: '#333357',
				'secondary-variant': '#333357',
				'on-secondary': '#ffffff',
				background: '#ffffff',
				'background-variant': '#f6f7f9',
				'on-background': '#282829',
				'on-background-variant': '#6b6b6b',
				divider: '#c5cacf',
				error: '#ce3f00',
				'on-error': '#ffffff',
				visited: '#9333ea'
			},
			borderRadius: {
				sm: '0.125rem',
				DEFAULT: '0.25rem',
				md: '0.375rem',
				lg: '0.5rem',
				xl: '0.75rem',
				full: '100%'
			},
			fontWeight: {
				bold: '700'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
