/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html'],
	important: true,
	theme: {
		fontFamily: {
			body: ['"Poppins"', 'sans-serif'],
		},
		colors: {
			inherit: 'inherit',
			softPink: '#f6ebda',
			orange: '#ff902b',
			softOrange: 'f9d9aa',
			brown: '#2f2105',
			gray: '#7e7d7a',
			white: '#ffffff',
			yellow: '#f4ae26',
			black: '#000000',
			semiBlack: '#2f2105',
			opinionBorderCard: 'rgba(255, 211, 144, 0.62)',
			opinionP: '#ffcb7c',
			transparent: 'transparent',
		},
		container: {
			center: true,
		},
		screens: {
			xsm: '320px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			boxShadow: {
				card: '0 10px 10px 10px rgba(0,0,0, 0.25)',
				specialCard: '0 0 6px 0 rgba(0,0,0, 0.16)',
			},
			backgroundImage: {
				about: "url('../assets/bgAboutUs.png')",
				opinion: "url('../assets/bgOpinions.png')",
				footerImg: "url('../assets/footerImg.png')",
			},
			backgroundSize: {
				'70%': '70%',
			},
		},
	},
	plugins: [],
};
