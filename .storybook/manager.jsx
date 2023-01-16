import { addons } from '@storybook/manager-api'

addons.setConfig({
  initialActive: 'sidebar',
  sidebar: {
    collapsedRoots: ['docs', 'foundations'],
  },
})
