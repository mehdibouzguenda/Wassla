import type { Config } from 'tailwindcss'
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#0097A7', dark:'#006D75', glow:'#00E5FF' } },
      boxShadow: { brand:'0 20px 45px -14px rgba(0, 151, 167, .35)' }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
