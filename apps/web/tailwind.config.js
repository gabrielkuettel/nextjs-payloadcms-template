// tailwind config is required for editor support

const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      spacing: {
        '784': '49rem',
      }
    }
  }
}
