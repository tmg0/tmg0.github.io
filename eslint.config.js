import antfu from '@antfu/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default antfu({
  astro: true,
  ...oxlint.configs['flat/recommended'],
})
