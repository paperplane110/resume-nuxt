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
  },
  shortcuts: {
  }
})
