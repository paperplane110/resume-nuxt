import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    textColor: theme => ({
      ...theme('colors'),
      primary: '#9a42ff',
      secondary: '#5961f8',
      danger: '#e3342f',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#9a42ff',
      secondary: '#5961f8',
      danger: '#e3342f',
    }),
    extend: {
      boxShadow: {
        // add next ui theme shadow
        nsm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
        nmd: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
        nlg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
        nxl: '0 25px 65px 0px rgb(104 112 118 / 0.35)'
      }
    }
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-between': 'flex justify-between items-center',
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
})
